import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { Icon, Logo } from '../../components'

import colors from '../../values/colors'
import sizes from '../../values/sizes'

import Tabs from './Tabs'
import Login from '../../containers/Login'
import Profile from '../../containers/Profile'

const RoutesConfig = () => ({
  HomeTab: { 
    screen: Tabs,
    navigationOptions: { header: null } 
  },
  Home: {
    screen: Login, 
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Gerenciador de Escritório',
      headerLeft: null, //<BackButton navigation={navigation} />,
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    })
  },
  Profile: {
    screen: Profile, 
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Profile',
      headerLeft: <BackButton navigation={navigation} />,
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    })
  }
})

const StackNavigatorConfig = () => ({ 
  initialRouteName: 'Home',
  headerBackTitleVisible: false,

  navigationOptions: {
    swipeEnabled: false,
    tabBarVisible: true,
    headerLeft: null,
    headerRight: null,
    headerTintColor: colors.headerItems,
    headerStyle: {
      backgroundColor: colors.header,
    },
    headerTitleStyle: { 
      fontSize: sizes.font.navbar, 
      fontWeight: 'bold'
    }
  }
})

const Stack = StackNavigator(
  RoutesConfig(),
  StackNavigatorConfig()
)

const BackButton = ({ navigation }) => (
  <View style={stylesLocal.containerBackButton}>
    <Icon 
      icon='arrow-back' 
      color={colors.headerItems} 
      onClick={() => navigation.goBack(null)} 
    />
  </View>
)

const stylesLocal = {
  containerBackButton: {
    marginLeft: 8
  }
}

export default Stack
