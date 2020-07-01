import {observable} from 'mobx'
import UserStore from './UserStore'

interface IApplicationStoreInterface {
  userStore: UserStore;
}

class ApplicationStore {
  @observable userStore = new UserStore()
  constructor () {
  }

  reset() {
    this.userStore = new UserStore()
  }
}


export { ApplicationStore }
export { IApplicationStoreInterface }
