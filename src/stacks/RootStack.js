import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeView from '../views/Home/HomeView'


/* eslint-disable no-unused-vars */
const Stack = createStackNavigator()

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name='Home'
        component={HomeView}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  )
}
