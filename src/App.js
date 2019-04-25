import React, { useEffect } from 'react'
import { BackHandler } from 'react-native'

import Store from './redux/Store'
import Navigation from './helpers/navigation'

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true
    BackHandler.addEventListener('hardwareBackPress', handleBackButton)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
    }
  }, [])

  const handleBackButton = () => true 

  return (
    <Store>
      <Navigation />
    </Store>
  )
}

export default App
