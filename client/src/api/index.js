import AuthStore from 'stores/auth'
import chat from 'stores/chat'

const auth = new AuthStore()

export default class API {
  async getToken(email, password) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const ROOT_URL = 'http://localhost:5000/api'
    const raw = JSON.stringify({ email, password })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    await fetch(`${ROOT_URL}/users/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => auth.ejectToken(result))
      .catch((error) => console.log('error', error))
  }

  async getUserByID() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json',
        //prettier-ignore
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }),
    }

    await fetch('http://localhost:5000/api/users/u1', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }

  async getUsers() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json',
        //prettier-ignore
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }),
    }

    await fetch('http://localhost:5000/api/users/', requestOptions)
      .then((response) => response.json())
      .then((result) => chat.setUsers(result))
      .catch((error) => console.log('error', error))
  }

  async c() {
    console.log('lol')
  }
}
