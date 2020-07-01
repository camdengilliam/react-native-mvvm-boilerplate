import Interfaces from 'src/actions/repository/interfaces'
import Models from 'src/models'

const IUserInterface = Interfaces.IUserInterface

const User = Models.User

class UserRepository implements IUserInterface {

  private _dataCtx: IUserInterface

  constructor(dataCtx:IUserInterface) {
    this._dataCtx = dataCtx
  }

  getResourceById(id: string | number) : Promise<User | undefined> {
    return this._dataCtx.getResourceById(id)
  }

  getResources() : Promise<Array<User>> {
    return this._dataCtx.getResources()
  }

}

export default UserRepository
