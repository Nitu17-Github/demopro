//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Icon } from 'react-native-basic-elements';
import { COLORS } from '../Constants/Colors';
import { FONTS } from '../Constants/Fonts';

// create a component
const Rewards = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView} >
                <View>
                    <View style={styles.hiiView}>
                        <Text style={styles.helloText}>Hello, Noah</Text>
                        <Image source={require('./../assets/Profile/hi.jpeg')}
                        style={styles.hiiImage} />
                    </View>
                    <Text style={styles.welcomeText}>Welcome back!</Text>
                </View>

                <Image source=
                    {require('./../assets/Profile/Ann.jpeg')}
                    style={styles.image} />
                {/* <Text style={styles.welcomeText}>Welcome back!</Text> */}

            </View>

            <View style={styles.rewardMainView}>
                <View>
                    <Text style={styles.pointText}>Points</Text>
                    <Text>2000</Text>
                </View>
                <Text style={styles.equal}>=</Text>
                <View>
                    <Text style={styles.usd}>USD</Text>
                    <Text>234</Text>
                </View>
            </View>
            {/* <Text>set picture</Text> */}
            <Image source=
                {require('./../assets/Profile/reww.jpeg')}
                style={styles.rewardImage} />

            <View style={styles.redeemMainView} >
                <View style={styles.qrView}>
                    <Icon name='qrcode' type='FontAwesome'
                        style={styles.qrIcon} />
                </View>
                <Pressable style={styles.redeemView}>
                    <Text style={styles.redemText}>Redeem Now</Text>
                      <Icon name='arrow-forward' type='Ionicons'
                        style={styles.redeemArrow} />
                </Pressable>
                
             
            </View>

            <View>
                <Text style={styles.checkOut}>Use this QR code when you </Text>
                <View style={styles.giftView}>
                    <Text style={styles.textCheck}>checkout to get points</Text>
                    <Image source=
                        {require('./../assets/Profile/gift1.png')}
                        style={styles.gift}
                    />
                </View>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        // marginHorizontal: 20,
        paddingHorizontal:20,
        // marginTop: 20

    },
    hiiView:{
     flexDirection:'row',
     
    },
    mainView: {
        flexDirection: 'row',
        // flex:1
        marginBottom: 20,
        marginTop:35

    },
    helloText: {
        fontFamily: FONTS.bold,
        color: 'black'
    },
    hiiImage:{
      height:30,
      width:30,
    
    
      
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginHorizontal: 60


    },
    welcomeText: {
        // paddingHorizontal:40
        fontSize: 25,
        color: 'black',
        fontFamily: FONTS.bold

    },
    rewardMainView: {
        flexDirection: 'row',
        marginBottom: 20,
        // marginHorizontal:90,
        // alignItems:'center'
        // justifyContent:'center'

    },
    pointText: {
        // fontSize:10
        color:'black',
        fontFamily:FONTS.bold,
       

    },
    equal:{
    //   justifyContent:'center'
    // textAlign:'center'
    // alignItems:'center'
    },
    usd:{
    //    paddingHorizontal:70
    },
    rewardImage: {
        // position:'absolute'
        marginHorizontal: 90,
        backgroundColor: COLORS.lightyellow,
        marginBottom: 20
    },
    redeemMainView: {
        flexDirection: 'row',
        marginBottom: 20,
        //  marginLeft:60

    },
    redeemView: {
        flexDirection:'row',
        width:'70%',
        height: 70,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 15,
        
        marginLeft: 20,
      

    },
    redemText: {
        color: 'white',
     
        fontFamily: FONTS.bold,
        marginRight:5
      

    },
    qrView: {
        //  position:'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        //  paddingHorizontal:20
        // marginHorizontal:30
        //  left:50
        //  marginVertical:30
        backgroundColor:'black',
        borderRadius:10

    },
    qrIcon: {
        fontSize: 40,
                color: 'white',
      
        paddingHorizontal: 14,
       


    },
    redeemArrow: {
        color: 'white',
        fontSize: 30,
        // marginRight:10,
        // position: 'absolute',
        // left: 250,
        // paddingHorizontal:-210,
        // marginHorizontal:100,
        // bottom: 12,
        fontFamily: FONTS.bold


    },
    checkOut: {
        marginHorizontal: 40,
        textAlign: 'center'
    },
    textCheck: {
        // textAlign: 'center'
    },
    giftView: {
        flexDirection: 'row',
        marginHorizontal: 80,
        textAlign: 'center'
    },
    gift: {
        height: 30,
        width: 30,
        // marginHorizontal:0
    }
});

//make this component available to the app
export default Rewards;
