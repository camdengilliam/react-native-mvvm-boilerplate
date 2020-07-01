import React from 'react'
/* eslint-disable no-unused-vars */
import {Provider, observer} from 'mobx-react'
/* eslint-disable no-unused-vars */
import AppContainer from './stacks/AppContainer'

import DI from 'src/di'


@observer
class App extends React.Component {

  render(){
    return (
      <Provider applicationStore={DI.applicationStore}>
        <AppContainer />
      </Provider>
    )
  }

}


export default App
