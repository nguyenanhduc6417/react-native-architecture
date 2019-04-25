import { DrawerNavigator } from 'react-navigation'

import Stack from './Stack';
import Tabs from './Tabs'

const Drawer = DrawerNavigator(
  {
    Stack: { screen: Stack },
    Tabs: { screen: Tabs }
  },
  {
    initialRouteName: 'Stack'
  }
)

export default Drawer
