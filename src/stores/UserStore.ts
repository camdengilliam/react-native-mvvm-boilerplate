import { observable } from 'mobx'


import Models from 'src/models'

const User = Models.User

class UserStore {
	@observable _currentUser? : User
	constructor() {
	}
}

export default UserStore
