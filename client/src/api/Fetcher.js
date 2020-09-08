export default class Fetcher {
  async get(path, options) {
    return this._fetch('GET', path, null, options)
  }
  async post(path, data, options) {
    return this._fetch('POST', path, data, options)
  }
  async _fetch(method, path, data, token) {
    const response = await fetch(path, {
      method: method,
      header: `{"Authorization": Bearer ${token}}`,
      body: data,
    })
    return response
  }
}

// async getToken() {
//   fetcher
//     .post(
//       `http://localhost:5000/api/users/login`,
//       JSON.stringify({ email: 'arsen@gmail.com', password: '123456' })
//     )
//     .then((response) => (response.ok ? response.json() : response.statusText))
//     .then((data) => console.log(data, 'fetcher'))
// }

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
