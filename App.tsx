import {StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/reduxToolkit/store/Store';
import RootNavigation from './src/navigation/Index';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer independent={true}>
          <BottomSheetModalProvider>
            <RootNavigation />
          </BottomSheetModalProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({});
