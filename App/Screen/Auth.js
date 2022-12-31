import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import { FONTS } from '../Constants/Fonts'
import { Icon, StatusBar } from 'react-native-basic-elements'
import LinearGradient from 'react-native-linear-gradient';
// import Navigation from '../Service/Navigation';
import NavigationService from '../Service/Navigation';

const Auth = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'white'}
                barStyle={'light-content'}
            />
            <Text style={{
                ...styles.text,
                marginBottom: 40,
                textAlign: 'center',
                fontSize: 30,
                color: 'black'
            }}>Login</Text>


            <Text style={{
                ...styles.text,
                fontFamily: FONTS.bold,
                fontSize: 13,
                marginHorizontal: 35
            }}>Username:</Text>

            <View style={styles.inputView}>
                <Icon name='user' type='AntDesign' style={styles.inputIcon} />
                <TextInput placeholder='Type your username'

                    style={styles.inputStyle}
                />
            </View>
            <Text style={{
                ...styles.text,
                fontFamily: FONTS.bold,
                fontSize: 13,
                marginHorizontal: 35
            }}>Password:</Text>
            <View style={styles.inputView}>
                <Icon name='lock' type='AntDesign' style={styles.inputIcon} />
                <TextInput placeholder='Type your password'
                    style={styles.inputStyle} />
            </View>


            <Text style={{
                ...styles.text,
                fontFamily: FONTS.regular,
                textAlign: 'right',
                marginBottom: 35,
                paddingHorizontal: 25,
                fontSize: 12,
                fontFamily: FONTS.bold
            }}>Forgot Password?</Text>

        <Pressable
        onPress={()=>NavigationService.navigate('Registration')}
        >

            <LinearGradient
        
                start={{ x: 0.0, y: 0.20 }} end={{ x: 1.1, y: 2.6 }}
                colors={['#8ed1fc', '#d534eb',]} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </LinearGradient>
        </Pressable>
            <Text style={styles.signupView}>Or Sign Up Using </Text>


            <View style={styles.imageView}>
                <Image source={require('./../assets/auth/facebook.jpeg')} style={styles.image} />
                <Image source={require('./../assets/auth/twitter.png')} style={styles.image} />
                <Image source={require('./../assets/auth/google.png')} style={styles.image} />
            </View>

            <Text style={styles.signup}>Or Sign Up Using </Text>
            <Text style={styles.signView}>SIGN UP</Text>


        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'red'
        marginTop: 15



    },
    text: {
        fontSize: 15,
        fontFamily: FONTS.bold
    },
    inputStyle: {
        flex: 1,
        // alignItems:'center',
        // justifyContent:'center',
        // marginHorizontal:90,
        // borderBottomWidth: 2,
        borderBottomWidth:2,
        marginBottom: 25

    },

    inputView: {
        flexDirection: 'row',
        // alignItems:'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 39,
        // backgroundColor:'red',


    },
    inputIcon: {
        marginTop: 12,
        
    },
    image: {
        height: 50,
        width: 50,
        marginHorizontal: 5,
        borderRadius: 25
    },
    imageView: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 90,
        borderRadius: 25

    },
    signupView: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 12,
        fontFamily: FONTS.regular,
        color: 'black'

    },
    signup: {
        textAlign: 'center',
        marginBottom: 25,
        fontSize: 12,
        fontFamily: FONTS.regular
    },
    signView: {
        textAlign: 'center',
        marginBottom: 25,
        fontSize: 12,
        fontFamily: FONTS.bold
    },

    linearGradient: {
        height: 45,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 10
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',

    },
});