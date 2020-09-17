import { observable, action, reaction } from 'mobx'

const saveLocalStorage = (key) => (value) => {
  if (value) {
    localStorage.setItem(key, value)
  } else {
    localStorage.removeItem(key)
  }
}

class AuthStore {
  @observable token = localStorage.getItem('token')

  @observable userID = localStorage.getItem('userID')

  @observable authenticated = false

  constructor() {
    reaction(() => this.token, saveLocalStorage('token'))
    reaction(() => this.userID, saveLocalStorage('userID'))
  }

  ejectToken(res) {
    if (res.data.message == 'Success!') {
      this.token = res.data.token
      this.userID = res.data.user.slice(11, res.data.user.length)
      this.authenticated = true
    } else {
      console.log('wrong credentials')
    }
  }
}

export default new AuthStore()
