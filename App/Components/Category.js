//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const Category = (props) => {
   
    return (
        <View style={styles.container}>
            <Image source={props.data.img}
            style={styles.catImg}
            />
            <Text>{props.data.title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:10,
        // backgroundColor:'red'
        
    },
    catImg:{
        height:70,
        width:70,
        borderRadius:80,
     
    }
});

//make this component available to the app
export default Category;
