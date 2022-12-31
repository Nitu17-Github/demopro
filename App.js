import { View, Text } from 'react-native'
import React, { Component, useEffect, useState } from 'react';
// import Auth from './App/Screen/Auth';
import Registration from './App/Screen/Registration';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './App/Screen/Auth';
import NavigationService from './App/Service/Navigation';
import Home from './App/Screen/Home';


const Stack = createNativeStackNavigator();

const App = () => {
return (
    <View style={{ flex: 1 }}>
      <NavigationContainer
      ref={r => NavigationService.setTopLevelNavigator(r)}>
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
          
        }}
        headerMode="none"
        initialRouteName="Auth"

        >
         
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Registration" component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Auth/>
       <Registration/> */}
       <Home/>
    </View>
  )
}

export default App