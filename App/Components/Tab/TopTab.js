//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar} from 'react-native-basic-elements';
// import { COLORS } from '../Constants/Colors';
// import { moderateScale } from '../Constants';
// import Top from './Top';
// import Tags from './Tags';
import { FONTS } from '../Constants/Fonts';
import Top from '../../Screen/Top';
import Tags from '../../Screen/Tags';
import { COLORS } from '../../Constants/Colors';
import { moderateScale } from '../../Constants';
import Audio from '../../Screen/Audio';
import Accounts from '../../Screen/Accounts';
// import Listitem from './../../Components/Listitem';



const Tab = createMaterialTopTabNavigator();

// create a component
const Toptab= () => {
    return (
        <View style={styles.container}>
        {/* <StatusBar
          backgroundColor={COLORS.ofwhite}
          barStyle="dark-content"
          translucent={false}
        />  */}
        {/* <SearchHeader /> */}
        {/* <ScrollView> */}               
        <Tab.Navigator
          initialLayout="News"
          tabBarOptions={{
            style: {
              activeTintColor: COLORS.white11,
              backgroundColor: COLORS.headerColor,
              height: moderateScale(40),
            },
            activeTintColor: COLORS.grey11,
            inactiveTintColor: COLORS.gray2,
  
            labelStyle: {
              fontWeight: 'bold',
              fontSize: moderateScale(12),
              textTransform: 'capitalize',
              width: moderateScale(100),
  
              // activeTintColor: COLORS.themecolor,
              textTransform: 'none',
              // backgroundColor: 'green',
              // borderWidth: 2,
            },
            // scrollEnabled: true,
            indicatorStyle: {
              backgroundColor: COLORS.yello11,
              // width: moderateScale(40),
            },
          }}>
          <Tab.Screen name="Top" component={Top} 
         
          />
          {/* {login_status ? (
            <Tab.Screen name="Mconnect" component={Mconnect} />
          ) : null} */}
        
            <Tab.Screen name="Tag" component={Tags}/>

            <Tab.Screen name="Audio" component={Audio}/>
            <Tab.Screen name='Accounts' component={Accounts}/>
            {/* <Tab.Screen name='listitem'  component={Listitem}/>                             */}
      
        </Tab.Navigator>
        {/* </ScrollView> */}
      </View>
    );
  }

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'black',
        // color:'black'
        
    },
});

//make this component available to the app
export default Toptab;


{/* <View style={styles.container}>
            
            
</View> */}