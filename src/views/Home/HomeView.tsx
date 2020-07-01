import React from 'react'

import {inject, observer} from 'mobx-react'

import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'


import HomeViewModel from './HomeViewModel'

import DI from 'src/di'
import Models from 'src/models'
import Stores from 'src/stores'
import Styles from 'src/styles'

const ButtonStyles = Styles.ButtonStyles

const IApplicationStoreInterface = Stores.Interfaces.IApplicationStoreInterface

const User = Models.User

const UserServiceDIBuilder = DI.UserServiceDIBuilder


interface IHomeViewProps {
  applicationStore: IApplicationStoreInterface;
}

interface Styles {
  button: any; //spread operator throws ts off
  buttonText: any; //spread operator throws ts off
  container: ViewStyle;
  contentContainer: ViewStyle;
  listItem: ViewStyle;
  title: TextStyle;
}


const styles = StyleSheet.create<Styles>({
  button: {
    ...ButtonStyles.primaryButton,
    margin: 10
  },
  buttonText: {
    ...ButtonStyles.primaryButtonText
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30
  },
  listItem: {
    borderColor: '#aeaeae',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'column',
    padding: 10
  },
  title: {
    fontSize: 28,
    marginTop: 40,
    textAlign: 'center'
  }
})




@inject('applicationStore') @observer
class HomeView extends React.Component<IHomeViewProps> {

  private _viewModel : HomeViewModel

  constructor(props : any) {
    super(props)

    this._viewModel = new HomeViewModel(props, props.applicationStore, _userService)
  }

  componentDidMount() {
    this._viewModel.getData()
  }

  renderTable() {
    return (
      <View style={styles.container}>
        {
          this._viewModel.users.length > 0 ? this.renderTableData()
            : <Text>No data available</Text>
        }
      </View>
    )
  }

  renderTableData() {
    return this._viewModel.users.map((user:User) => {
      return (
        <View style={styles.listItem} key={`user-${user.id}`}>
          <Text> User Id: <Text>{user.id}</Text></Text>
          <Text> First Name: <Text>{user.nameFirst}</Text></Text>
          <Text> Last Name: <Text>{user.nameLast}</Text></Text>
        </View>
      )
    })
  }


  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title} testID="home-text"> My Home </Text>

        <TouchableOpacity
          testID="get-users-button"
          style={styles.button}
          onPress={() => this._viewModel.getData()}
        >
          <Text style={styles.buttonText}> Get Users</Text>
        </TouchableOpacity>


        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {!this._viewModel.loading ?
            this.renderTable() : <Text>Loading....</Text>
          }

        </ScrollView>
      </View>
    )
  }
}


// Have to build dI

const _userServiceBuilder = new UserServiceDIBuilder(DI.applicationStore)
const _userService = _userServiceBuilder.userServiceAppCtx()

export default HomeView
