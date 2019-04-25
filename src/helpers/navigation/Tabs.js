import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import colors from '../../values/colors'

import Login from '../../containers/Login'

const Tabs = createBottomTabNavigator(
  {
    Login: { 
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Autodesafios',
        tabBarIcon: () => (
          <Image 
            style={{ height: 24, width: 24 }}
            source={require('../../../assets/icon/ic_auto.png')} 
          />
        )
      }
    }
  },
  {
    order: ['Login'],
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: colors.gray,
        borderTopWidth: 2
      },
      activeTintColor: colors.primary,
      inactiveTintColor: colors.primaryDark
    }
  }
)

export default Tabs
