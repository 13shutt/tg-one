import { observable, action, reaction, computed } from 'mobx'
import API from 'api/index'

const api = new API()

class ChatStore {
  @observable users = []
  @observable loading = false

  @action
  getUsers = () => {
    api.getUsers()
  }

  @action
  setUsers = (res) => {
    this.users = res.data.users
  }
  // getUsers = () => console.log('getUser')
}

export default new ChatStore()
