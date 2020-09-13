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
  //user id
  //@observable userID = localStorage.getItem('userID')

  constructor() {
    reaction(() => this.token, saveLocalStorage('token'))
  }

  ejectToken(res) {
    if (res.data.message == 'Success!') {
      //this.userID = res.data.userID
      this.token = res.data.token
    } else {
      console.log('wrong credentials')
    }
  }
}

export default AuthStore
