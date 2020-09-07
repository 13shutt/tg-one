import Fetcher from './Fetcher'

const fetcher = new Fetcher()

export default class API {
  // async getToken() {
  //   fetcher
  //     .post(
  //       `http://localhost:5000/api/users/login`,
  //       JSON.stringify({ email: 'arsen@gmail.com', password: '123456' })
  //     )
  //     .then((response) => (response.ok ? response.json() : response.statusText))
  //     .then((data) => console.log(data, 'fetcher'))
  // }

  async getToken() {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({ email: 'arsen@gmail.com', password: '123456' })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    fetch('http://localhost:5000/api/users/login', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }

  async getUser() {
    fetcher
      .get(`http://localhost:5000/api/users/?u=arsen`)
      .then((response) => (response.ok ? response.json() : response.statusText))
      .then((data) => console.log(data, 'fetcher'))
  }

  async getUsers() {
    fetcher
      .get(`http://localhost:5000/api/users/`)
      .then((response) => (response.ok ? response.json() : response.statusText))
      .then((data) => console.log(data, 'fetcher'))
  }

  async c() {
    console.log('lol')
  }
}

// export default function () {
//   // fetcher
//   //   .get(`http://localhost:5000/api/users/?u=arsen`)
//   //   .then((response) => (response.ok ? response.json() : response.statusText))
//   //   .then((data) => console.log(data, 'fetcher'))

//   // fetcher
//   //   .get(`http://localhost:5000/api/users/`)
//   //   .then((response) => (response.ok ? response.json() : response.statusText))
//   //   .then((data) => console.log(data, 'fetcher'))

//   fetcher
//     .post(
//       `http://localhost:5000/api/users/login`,
//       JSON.stringify({
//         email: 'arsen@gmail.com',
//         password: '123456',
//       })
//     )
//     .then((response) => (response.ok ? response.json() : response.statusText))
//     .then((data) => console.log(data, 'fetcher'))
// }

//http://localhost:5000/api/users/signup

//http://api.icndb.com/jokes/random/1
