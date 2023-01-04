//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../Constants/Colors';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants';
import Rewards from '../Screen/Rewards';
import Home from '../Screen/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation'
import { Icon } from 'react-native-basic-elements';
// import Explore from '../Components/Explore';
import Exploring from '../Screen/Exploring';
import More from '../Screen/More';
import Toptab from '../Screen/Toptab';



const Tab = createBottomTabNavigator();
// create a component
const BottomTab = () => {
    return (
        <Tab.Navigator
        // tabBarVisible={false}
        // options={{headerShown:'false'}}
        
        screenOptions={({route}) => ({
          headerShown:false,
          // tabBarShowLabel: true,

            
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            size = 22;
  
            if (route.name === 'HOME') {
              // return <Icon name="gift"  type='AntDesign'size={size} color={color} />;
            return <Icon name="home"  type='Entypo'size={size} color={color} />;

            } else if (route.name === 'Rewards') {
              return <Icon name="gift" type='AntDesign' size={size} color={color} />;
            } else if(route.name === 'Explore'){
               return<Icon name='search' type='EvilIcons' size={size} color={color}/>
            }else if(route.name === 'More'){
                return<Icon name='more-horizontal' type='Feather' size={size} color={color}/>
            }
            
          },
        })}
        
        
        tabBarOptions={{
        
          activeTintColor: COLORS.darkred,
          inactiveTintColor: COLORS.gray11,
          labelStyle: {
            fontSize: moderateScale(8),
            fontFamily: FONTS.bold,
            marginBottom: 3,
            marginBottom: moderateScale(4),
            // color: '#7D43E0',
          },
           
          style: {backgroundColor: COLORS.headerColor, height: moderateScale(58)},
        }}>
        <Tab.Screen 
        name="HOME" 
        component={Home} />
  
        {/* {login_status ? (
          <Tab.Screen
            name="LEARNING"
            // component={Social}
            component={MyClassHome}
            options={{unmountOnBlur: true}}
          />
        ) : null} */}
  
        <Tab.Screen
          name="Rewards"
          component={Rewards}
        //   options={{unmountOnBlur: true}}
        />
        <Tab.Screen
        name="Explore"
        component={Exploring}
        />

        <Tab.Screen
        name="More"
        component={More}/>
        
       
      </Tab.Navigator>


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
export default BottomTab;
