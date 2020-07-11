export default function () {
  console.log('api')
  fetch(`http://localhost:5000/api/users/?u=arsen`)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

//http://localhost:5000/api/users/signup

//http://api.icndb.com/jokes/random/1
