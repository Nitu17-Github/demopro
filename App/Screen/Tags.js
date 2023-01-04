//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'react-native-basic-elements';
import Listitem from './../Components/Listitem';
// import StatusBar from 'react-native-basic-elements';
// import Tags from './../Screen/Tags';



const DATA = [
    {
        name: 'gfdhjkhkdj',
        post: 'hii'
    },
    {
        name: 'AAAAAAAA',
        post: 'hii'
    },
    {
        name: 'BBBBBBBBBBB',
        post: 'hii'
    },
    {
        name: 'CCCCCCCCCCCC',
        post: 'hii'
    },
    {
        name: 'DDDDDDDDD',
        post: 'hii'
    },
    {
        name: 'EEEEEEEEEEEEEEE',
        post: 'hii'
    },
    {
        name: 'EEEEEEEEEEEEEEE',
        post: 'hii'
    },
    {
        name: 'EEEEEEEEEEEEEEE',
        post: 'hii'
    },
    {
        name: 'EEEEEEEEEEEEEEE',
        post: 'hii'
    },
    {
        name: 'EEEEEEEEEEEEEEE',
        post: 'hii'
    },
    {
        name: 'EEEEEEEEEEEEEEE',
        post: 'hii'
    },
    {
        name: 'EEEEEEEEEEEEEEE',
        post: 'hii'
    },
    {
        name: 'EEEEEEEEEEEEEEE',
        post: 'hii'
    },

]

// create a component
const Tags = () => {
    return (
        <View style={styles.container}>
          
            {/*            
                {
                    DATA.map((item) => {
                        return (
                            <Listitem data={item} />
                        )
                    })
                } */}

            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    return (
                        <Listitem data={item} />
                    )
                }}
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'black',
    },
});

//make this component available to the app
export default Tags;
