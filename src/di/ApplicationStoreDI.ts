import Stores from 'src/stores'

const ApplicationStore = Stores.ApplicationStore

const IApplicationStoreInterface = Stores.Interfaces.IApplicationStoreInterface



class ApplicationStoreDIBuilder {
  constructor() {}

  applicationStoreCtx(): IApplicationStoreInterface {
    return new ApplicationStore()
  }

}

export default ApplicationStoreDIBuilder
