import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MainNavigation from './src/Routes/MainNavigation/MainNavigation'
import { ThemeContext } from './src/Utils/Theme'

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <MainNavigation/>
    </ThemeContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({})