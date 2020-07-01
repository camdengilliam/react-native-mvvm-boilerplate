import Models from 'src/models'

const User = Models.User

interface IUserInterface {
  getResourceById(id: string | number) : Promise<User | undefined>;
  getResources() : Promise<Array<User>>;
}

export default IUserInterface
