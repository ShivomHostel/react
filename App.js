import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MainNavigation from './src/Routes/MainNavigation/MainNavigation'
import { ThemeContext } from './src/Utils/Theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from './src/Service/Store'

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <Provider store={store}>
    <ThemeContext.Provider value={theme}>
      <GestureHandlerRootView  style={{ flex: 1 }}>
        <MainNavigation/>
      </GestureHandlerRootView>
    </ThemeContext.Provider>
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})