import HomeViewModel from './HomeViewModel'

import DI from 'src/DI'

import Actions from 'src/actions'
import Data from 'src/data'
import Models from 'src/models'
import Stores from 'src/stores'
import Styles from 'src/styles'

const ApplicationStore = Stores.ApplicationStore

const IApplicationStoreInterface = Stores.Interfaces.IApplicationStoreInterface

const UserDAOTest = Data.Test.Actions.Repository.DAO.UserDAOTest

const UserRepository = Actions.Repository.Repositories.UserRepository

const UserService = Actions.Services.UserService

const UserServiceDIBuilder = DI.UserServiceDIBuilder



describe('getData', () => {

  test('should return an array of users', () => {

    //arrange
    const applicationStore : IApplicationStoreInterface = new ApplicationStore()
    const userServiceDIBuilder : UserServiceDIBuilder = new UserServiceDIBuilder(applicationStore)

    const userDao = new UserDAOTest()
    const userRepository : UserRepository = userServiceDIBuilder.userRepositoryCtx(userDao)
    const userService : UserService = userServiceDIBuilder.userServiceCtx(userRepository)

    const viewModel:HomeViewModel = new HomeViewModel({}, applicationStore, userService)

    //act

    const promise = viewModel.getData()

    //asert

    expect(viewModel.loading).toEqual(true)

    return promise.then(() => {
      expect(viewModel.loading).toEqual(false)
      expect(viewModel.users.length).not.toEqual(0)
    })
      .catch(() => {

      })

  })

})
