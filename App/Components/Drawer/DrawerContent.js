//import liraries
// import { DrawerContent } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Card } from 'react-native-basic-elements';

// create a component
const DrawerContent = () => {
    return (
        <View style={styles.container}>
           
          {/* <Image source={require('./../../assets/Profile/15.jpeg')}/> */}
           <Text>Americano Coffee</Text>
            <Text>manisha9681053451@gmail.com</Text>
            <Text>Hot Spots</Text>
            <Text>Local files</Text>
            <Text>Marked files</Text>
            <Text>Cloud Storage </Text>
            <Text>Foot Print </Text>
            

            
               
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
});

//make this component available to the app
export default DrawerContent;
