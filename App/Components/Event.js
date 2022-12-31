//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-basic-elements';

// create a component
const Event = (props) => {
    // console.log('props.event>>>>',props.event.img)
    return (
        <View style={styles.container}>
            
            <Image source={props.data.img}
                style={styles.eventView}
            />
            <Icon name='hearto' type='AntDesign'
                style={styles.eventIcon} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    eventView: {
        marginHorizontal: 10,
        height: 140,
        width: 200,
        borderRadius: 15
        // marginHorizontal:30

    },
    eventIcon: {
        position: 'absolute',
        // marginHorizontal: 170,
        // marginTop: 10
        top:12,
        color:'white',
        left:170
    },
});

//make this component available to the app
export default Event;
