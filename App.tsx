import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/reduxToolkit/store/Store'
import RootNavigation from './src/navigation/Index'

export default function App() {
  return (
    <Provider store={store}>
    <RootNavigation></RootNavigation>
    </Provider>
  )
}

const styles = StyleSheet.create({})