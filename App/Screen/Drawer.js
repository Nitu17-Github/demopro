//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from '../Navigation/BottomTab';
import DrawerContent from '../Components/Drawer/DrawerContent';

const Drawer = createDrawerNavigator();

// create a component
const DrawerNav = () => {
    return (
      
        <Drawer.Navigator
        // hea
            drawerContent={props => <DrawerContent {...props} />}
            drawerStyle={{ width: 280 }}
            drawerPosition="right">
          <Drawer.Screen name="Home" component={BottomTab} options={{headerShown: false}}/>
        </Drawer.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DrawerNav;



{/* <View style={styles.container}>
<Text>MyComponent</Text>
</View> */}