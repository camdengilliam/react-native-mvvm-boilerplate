import Interfaces from 'src/actions/repository/interfaces'
import Models from 'src/models'

const IUserInterface = Interfaces.IUserInterface

const User = Models.User

class UserDAOTest implements IUserInterface {

  //private _apiLib: Api;

  constructor() {
    //this._apiLib = new Api()
  }

  getResourceById(id: string | number) : Promise<User | undefined> {
    // return this._apiLib.get(path)
    //   .then((data: any) => User.decode(data))

    return new Promise((resolve, reject) => {
      const data = {id: 1, nameFirst: 'Test', nameLast: 'Person'}
      resolve(data)
    })
      .then((data : any) => User.deserialize(data))
  }

  getResources() : Promise<Array<User>> {
    return new Promise((resolve, reject) => {
      const data = [
        {id: 1, nameFirst: 'Sally', nameLast: 'Sue'},
        {id: 2, nameFirst: 'Donny', nameLast: 'Day'},
        {id: 3, nameFirst: 'Manny', nameLast: 'Mall'}
      ]
      resolve(data)
    })
      .then((data : any) => {
        return data.map((json : any) => User.deserialize(json))
      })
  }

}


export default UserDAOTest
