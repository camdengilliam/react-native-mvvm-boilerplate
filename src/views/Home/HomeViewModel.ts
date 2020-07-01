import {observable} from 'mobx'

import Actions from 'src/actions'
import Models from 'src/models'
import Stores from 'src/stores'


const IApplicationStoreInterface = Stores.Interfaces.IApplicationStoreInterface

const UserService = Actions.Services.UserService

const User = Models.User


class HomeViewModel {

  // DI
  private _userService: UserService
  private _applicationStore: IApplicationStoreInterface

  //attr
  @observable private _loading: boolean
  @observable private _users: Array<User>

  constructor(props: any, applicationStore: IApplicationStoreInterface, userService:UserService)
  {

    this._applicationStore = applicationStore
    this._userService = userService

    this._loading = false
    this._users = []

  }


  getData() : Promise<void> {
    this.loading = true

    return this._userService.getUsers()
      .then((data: Array<User>) => {
        this.users = data
        this.loading = false
      })
      .catch((error) => {
        this.users = []
        this.loading = false
      })

  }


  // Getters + Setters
  get applicationStore(): IApplicationStoreInterface {
    return this._applicationStore
  }

  get loading(): boolean {
    return this._loading
  }

  set loading(loading: boolean) {
    this._loading = loading
  }


  get users(): Array<User> {
    return this._users
  }

  set users(users: Array<User>) {
    this._users = users
  }

}

export default HomeViewModel
