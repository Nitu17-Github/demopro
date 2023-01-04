import React from 'react'
import { View ,Text, TextInput,StyleSheet, Pressable} from 'react-native'
import { COLORS } from '../Constants/Colors'
import { FONTS } from '../Constants/Fonts'
import { Card, Icon } from 'react-native-basic-elements'
import NavigationService from '../Service/Navigation';


function Registration() {
  return (
  <View style={styles.container}>
    <Text style={styles.text}>Create Account</Text>

<Card style={styles.user}>
    <Icon name='user' type='AntDesign'
     style={styles.inputIcon}/>
    <TextInput placeholder='Username'
     style={styles.userText}/>
</Card>

<Card style={styles.user}>
<Icon name='mail' type='AntDesign'
     style={styles.inputIcon}/>
    <TextInput placeholder='email id'
    style={styles.userText}/>
</Card>

<Card style={styles.user}>
<Icon name='lock' type='Octicons'
     style={styles.inputIcon}/>
    <TextInput placeholder='password' 
       secureTextEntry={true}
       style={styles.userText}/>
</Card>

<Card style={[styles.user,{
    marginBottom:25
}]}>
<Icon name='lock' type='Octicons'
     style={styles.inputIcon}/>
    <TextInput placeholder='confirm password'
       secureTextEntry={true}
       style={styles.userText}/>
</Card>

<Pressable style={styles.regView}
     onPress={()=>NavigationService.navigate('Home')}
     >
    <Text style={styles.register}>Register</Text>

</Pressable>
    <Text style={styles.textView}>By registering, you confirm 
    that you accept our 
    <Text style={[styles.textView, {
        color:COLORS.lightyellow
    }]}>Terms of
         User</Text> and <Text style={[styles.textView,{
             color:COLORS.lightyellow
         }]}>Privacy Policy.</Text></Text>


<Pressable style={styles.styleBox}>
<Icon name='facebook-f' type='FontAwesome' 

// style={{flex:1}}
/>
   <Text style={styles.facebookText}>
    
     Sign In with Facebook</Text>
</Pressable>

<Pressable style={[styles.styleBox,{
    backgroundColor:COLORS.lightred,
    // fontFamily:FONTS.bold
    marginBottom:30
}]}>
     <Icon name='googleplus' type='AntDesign' 
    //  style={{flex:1}}
     />
  <Text style={styles.googleText}>
   
    Sign In with Google</Text>
</Pressable>


    <Text style={styles.textSignin}>Have an account?
     <Text style={styles.sign}>Sign in </Text></Text>


  </View>
  )
}

export default Registration


const styles = StyleSheet.create({
   container:{
    // backgroundColor:'red'
    marginTop: 15
   },
   text:{
       textAlign:'center',
       fontSize: 30,
       fontFamily: FONTS.bold,
       color:COLORS.Textthemecolor,
       marginBottom:45,

},
user:{
    marginHorizontal:20,
    height:45,
    padding:0,
    flexDirection:'row',
    alignItems:'center',
    marginVertical:5,
    paddingHorizontal:10,

},
userText:{
    color:COLORS.Textthemecolor,
    paddingHorizontal:18,


},
register:{
  textAlign:'center',
  justifyContent:'center',
  color:'white',
  fontFamily:FONTS.bold,
  fontSize:18
},
regView:{
    marginHorizontal:20,
    height:50,
    backgroundColor:COLORS.Dblue,
    // borderRadius:20,
    justifyContent:'center',
   marginBottom:35
},
textView:{
    paddingHorizontal:15,
    marginBottom:50
    
},
facebookText:{
    flex:1,
    color:'blue',
    textAlign:'center',
    // justifyContent:'center',
    fontFamily:FONTS.bold,
    padding:0,
    flexDirection:'row',
    alignItems:'center',    

},
styleBox:{
    marginHorizontal:20,
    height:50,
    backgroundColor:COLORS.Offwhite,
    // borderRadius:20,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:12,
    paddingHorizontal:30

},
googleText:{
    color:COLORS.darkred,
    textAlign:'center',
    // justifyContent:'center',
    fontFamily:FONTS.bold,
    flex:1,
},
textSignin:{
    textAlign:'center',
    fontFamily:FONTS.bold,
    fontSize:13
},
sign:{
    color:'blue'
}

});


// import liraries



// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { StatusBar } from 'react-native-basic-elements';

// const {width, height} = Dimensions.get('window')
// // create a component
// const App = () => {
//     console.log("width", width, height)
//     return (
//         <View style={styles.container}>
//             <StatusBar
//                 backgroundColor={'transparent'}
//                 barStyle="dark-content"
//                 // hidden={true}
//             />

//             <View
//                 style={{
//                     // flex: 2,
//                     backgroundColor: 'black',
//                     height: 150,
//                     // marginHorizontal: 15
//                     width:width -30
//                 }}
//             >

//             </View>

//             <View
//                 style={{
//                     // flex: 2,
//                     backgroundColor: 'yellow',
//                     height: 50,
//                     borderWidth:1
//                 }}
//             >

//             </View>
            

//             <View
//                 style={{
//                     backgroundColor: 'blue',
//                     // width:100,
//                     height: 100
//                 }}
//             >
//                 {/* <View
//                     style={{
//                         flex: 1,
//                         backgroundColor: 'red'
//                     }}
//                 >

//                 </View> */}
//             </View>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
// });

// //make this component available to the app
// export default App;
