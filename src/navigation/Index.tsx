import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BrandSelect from '../components/brandSelector/Index'
import BrandSelected from '../components/brandSelected/Index'

export default function RootNavigation() {
    const Stack=createStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='brandSelector'>
            <Stack.Screen name="brandSelector" options={{headerShown:false}} component={BrandSelect}></Stack.Screen>
            <Stack.Screen name="brandSelected" component={BrandSelected}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})