import ApplicationStoreDIBuilder from './ApplicationStoreDI'

import UserServiceDIBuilder from './UserServiceDI'

import Stores from 'src/stores'

const ApplicationStore = Stores.ApplicationStore



// build instance of application store
const applicationStoreDIBuilder : ApplicationStoreDIBuilder = new ApplicationStoreDIBuilder()
const applicationStore : ApplicationStore = applicationStoreDIBuilder.applicationStoreCtx()



const DI = {
  applicationStore, //instance of application store
  UserServiceDIBuilder
}

export default DI
