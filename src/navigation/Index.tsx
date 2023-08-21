import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/welcome/index';
import DashboardScreen from '../screens/dashboard/index';
import ItemDetailScreen from '../screens/itemDetail/index';
import OrderPreferenceScreen from '../screens/orderPreference/index';
export default function RootNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="brandSelector">
      <Stack.Screen
        name="WelcomeScreen"
        options={{headerShown: false}}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="OrderPreferenceScreen"
        options={{headerShown: false}}
        component={OrderPreferenceScreen}
      />
      <Stack.Screen
        name="DashboardScreen"
        options={{headerShown: false}}
        component={DashboardScreen}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        options={{headerShown: false}}
        component={ItemDetailScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
