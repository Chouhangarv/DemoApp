import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/reduxToolkit/store/Store'

export default function App() {
  return (
    <Provider store={store}>
    <View>
      <Text>App</Text>
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({})