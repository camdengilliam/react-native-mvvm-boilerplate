import DI from 'src/di'
import Interfaces from 'src/actions/repository/interfaces'
import Repositories from 'src/actions/repository/repositories'
import Models from 'src/models'

const IApplicationStoreInterface = Interfaces.IApplicationStoreInterface

const UserRepository = Repositories.UserRepository

const User = Models.User


class UserService {

  private _applicationStore : IApplicationStoreInterface
  private _repository: UserRepository

  constructor(applicationStore:IApplicationStoreInterface, repository:UserRepository) {
    this._applicationStore = applicationStore
    this._repository = repository
  }

  getUserById(id: string | number) : Promise<User | undefined> {
    return this._repository.getResourceById(id)
  }

  getUsers() : Promise<Array<User>> {
    return this._repository.getResources()
  }


  logout() {
    //resets state of data stores
    this._applicationStore.reset()
  }
}

export default UserService
