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

  @observable user = localStorage.getItem('user')

  constructor() {
    reaction(() => this.token, saveLocalStorage('token'))
    reaction(() => this.user, saveLocalStorage('user'))
  }

  ejectToken(res) {
    if (res.data.message == 'Success!') {
      this.user = res.data.user
      this.token = res.data.token
    } else {
      console.log('wrong credentials')
    }
  }
}

export default AuthStore
