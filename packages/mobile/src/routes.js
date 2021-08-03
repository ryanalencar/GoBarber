import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/MaterialIcons'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import ConfirmAppointment from './pages/New/ConfirmAppointment'
import SelectDateTime from './pages/New/SelectDateTime'
import SelectProvider from './pages/New/SelectProvider'

export default function createRouter(signedIn) {
  return createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  ConfirmAppointment,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    name='add-circle-outline'
                    size={20}
                    color='rgba(255,255,255,0.6)'
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: { backgroundColor: '#8d41a8' },
            },
          }
        ),
      },
      { initialRouteName: signedIn ? 'App' : 'Sign' }
    )
  )
}
