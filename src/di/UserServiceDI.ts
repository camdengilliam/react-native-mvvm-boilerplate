import Actions from 'src/actions'

import Stores from 'src/stores'

const UserDAO = Actions.Repository.DAO.UserDAO

const IUserInterface = Actions.Repository.Interfaces.IUserInterface

const UserRepository = Actions.Repository.Repositories.UserRepository

const UserService = Actions.Services.UserService


const ApplicationStore = Stores.ApplicationStore

const IApplicationStoreInterface = Stores.Interfaces.IApplicationStoreInterface




class UserServiceDIBuilder {
  private _applicationStore : IApplicationStoreInterface
  constructor(applicationStore: IApplicationStoreInterface) {
    this._applicationStore = applicationStore
  }

  /*
  * Utility for building application dao ctx
  */
  userDAOCtx() : UserDAO {
    return new UserDAO()
  }

  /*
  * Utility for building repo ctx
  */
  userRepositoryCtx (userDAO : IUserInterface) : UserRepository {
    return new UserRepository(userDAO)
  }

  /*
  * Utility for bulding service ctx
  */
  userServiceCtx (userRepository : UserRepository) : UserService {
    return new UserService(this._applicationStore, userRepository)
  }


  /*
  * Utility for building application user service ctx
  */
  userServiceAppCtx () : UserService {
    const _userDAO : UserDAO  = this.userDAOCtx()
    const _userRepository : UserRepository = this.userRepositoryCtx(_userDAO)
    const _userService : UserService = this.userServiceCtx(_userRepository)

    return _userService
  }

}


export default UserServiceDIBuilder
