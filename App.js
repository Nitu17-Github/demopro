import { View, Text } from 'react-native'
import React, { Component, useEffect, useState } from 'react';
// import Auth from './App/Screen/Auth';
import Registration from './App/Screen/Registration';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './App/Screen/Auth';
import NavigationService from './App/Service/Navigation';
import Home from './App/Screen/Home';
import Rewards from './App/Screen/Rewards';
import BottomTab from './App/Navigation/BottomTab';
import Toptab from './App/Components/Tab/TopTab';
import DrawerNav from './App/Screen/Drawer';
// import Toptab from './App/Screen/Toptab';


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
          <Stack.Screen name="Home" component={DrawerNav} />
          <Stack.Screen name="Tobtab" component={Toptab}/>

        </Stack.Navigator>
      </NavigationContainer>
      {/* <Auth/>
       <Registration/> */}
       {/* <Home/> */}
       {/* <BottomTab/> */}
       {/* <Rewards/> */}
    </View>
  )
}

export default App