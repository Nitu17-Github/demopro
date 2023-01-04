//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-basic-elements';
import { FONTS } from '../Constants/Fonts';

// create a component
const Listitem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.hashIcon}>

                <Icon name='hash' type='Feather' 
                style={styles.hash}
                />

                </View>

                <View style={styles.textView}>
                    <Text style={styles.nameText}>{props.data.name}</Text>
                    <Text style={styles.postText}>{props.data.post}</Text>
                </View>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',
        // alignItems: 'center',
        // borderRadius:20,
        backgroundColor:'black'

    },
    mainView: {
          flex:1,
        flexDirection: 'row',
        alignItems:'center'
    },
    hashIcon:{
      backgroundColor:'black',
      marginHorizontal:20,
      marginVertical:8,
      height:80,
      width:80,
      borderRadius:40,
      alignItems:'center',
      justifyContent:'center',
    //   borderColor:'red'
    borderWidth:1,
    borderColor:'grey'
    
    },
    hash:{
        color:'white',
       fontSize:40,
          
       
    },
    textView: {
        paddingHorizontal:10,
        // backgroundColor:'red',
        // color:'white'
    },
    nameText:{
        color:'white',
        fontFamily:FONTS.bold
        
    },
    postText:{
        color:'white',
        fontFamily:FONTS.light
    }
});

//make this component available to the app
export default Listitem;
