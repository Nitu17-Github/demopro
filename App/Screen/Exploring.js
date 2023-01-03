//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-basic-elements';
import Toptab from '../Components/Tab/TopTab';
import { COLORS } from '../Constants/Colors';

const DATA=[
    {
        name:'gfdhjkhkdj',
        post:'hii'
    },
    {
        name:'AAAAAAAA',
        post:'hii'
    },
    {
        name:'BBBBBBBBBBB',
        post:'hii'
    },
    {
        name:'CCCCCCCCCCCC',
        post:'hii'
    },
    {
        name:'DDDDDDDDD',
        post:'hii'
    },
    {
        name:'EEEEEEEEEEEEEEE',
        post:'hii'
    }
]

// create a component
const Exploring = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.searchView}>
                    <Icon name='caretleft' type='AntDesign'
                        style={styles.arrowIcon} />
                    <Text style={styles.searchText}>Search</Text>

                </View>

                <Pressable style={styles.coffeeView}>
                    <Icon name='left' type='AntDesign' />
                    <View style={styles.cofeeMain}>
                        <Icon name='search' type='EvilIcons'
                            style={styles.searchIcon} />
                        <TextInput placeholder='#coffee'
                            style={styles.coffeeText} />
                    </View>
                </Pressable>
   
          
            </View>
            <Toptab/>
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
    mainView: {
        marginTop: 20,
        marginHorizontal: 15,
        //   backgroundColor:'black'
    },
    searchView: {
        flexDirection: 'row',
        // color:'white'
        alignItems: 'center',
        marginBottom: 20

    },
    arrowIcon: {
        fontSize: 13,
        color: 'black'
    },
    iconView: {
        flexDirection: 'row'
    },
    searchText: {
        // marginTop:10
        color: 'black'
    },
    coffeeView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cofeeMain: {
        backgroundColor:COLORS.lightBlack,
       
        marginHorizontal: 10,
        paddingHorizontal: 115,
        borderRadius: 13,
        alignItems: 'center',
        flexDirection: 'row',
        // textAlign:'left'
        // paddingLeft:30
        // marginLeft:20
    },
    searchIcon: {
        color: 'gray'
    },
    coffeeText: {
        //   marginLeft:20
    }
});

//make this component available to the app
export default Exploring;

//import liraries

