//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import { Icon, StatusBar } from 'react-native-basic-elements';
import Toptab from '../Components/Tab/TopTab';
import { COLORS } from '../Constants/Colors';
import { FONTS } from '../Constants/Fonts';



// create a component
const Exploring = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'#000000'}
                barStyle="light-content"
            />
            <View style={styles.mainView}>
                <View style={styles.searchView}>
                    <Icon name='caretleft' type='AntDesign'
                        style={styles.arrowIcon} />
                    <Text style={styles.searchText}>Search</Text>

                </View>

                <Pressable style={styles.coffeeView}>
                    <Icon name='left' type='AntDesign'
                        style={styles.leftIcon}
                    />
                    <View style={styles.cofeeMain}>
                        <Icon name='search' type='EvilIcons'
                            style={styles.searchIcon} />
                        <TextInput placeholder='#coffee'
                            style={styles.coffeeText} />
                    </View>
                </Pressable>

            </View>
            <Toptab />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'black',
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
        color: 'white',
    },
    iconView: {
        flexDirection: 'row'
    },
    searchText: {
        // marginTop:10
        color: 'white',
        fontFamily: FONTS.bold
    },
    coffeeView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftIcon: {
        color: 'white',
        fontSize: 30,
        fontFamily: FONTS.bold
    },
    cofeeMain: {
        backgroundColor: COLORS.lightBlack,
        marginHorizontal: 10,
        borderRadius: 13,
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchIcon: {
        color: 'grey',
        paddingLeft: 10,
    },
    coffeeText: {
        marginRight: 200,
        color: 'red'
    }
});

//make this component available to the app
export default Exploring;

//import liraries

