//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const Explore = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.data.img}
             style={styles.imageExplore}
            />
            <Text>{props.data.title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height:80,
        width:80,
        marginVertical:2,
      
        alignItems:'center',
        justifyContent:'center'
        
        
    },
    imageExplore:{
        marginHorizontal:10,
        height:60,
        width:60,borderRadius:30,
        backgroundColor:'white',
        
        
        
    }
});

//make this component available to the app
export default Explore;
