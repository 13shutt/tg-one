import { observable, action } from 'mobx'

const saveLocalStorage = (key) => (value) => {
  if (value) {
    localStorage.setItem(key, value)
  } else {
    localStorage.removeItem(key)
  }
}

class AuthStore {}

export default AuthStore
