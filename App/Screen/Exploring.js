//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Exploring = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.regView}
                onPress={() => NavigationService.navigate('Home')}>

                <Text style={styles.exploring}>Exploring</Text>

            </Pressable>
        </View>
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
export default Exploring;
