//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar} from 'react-native-basic-elements';
import { COLORS } from '../Constants/Colors';
import { moderateScale } from '../Constants';
import Top from './Top';
import Tags from './Tags';
import { FONTS } from '../Constants/Fonts';



const Tab = createMaterialTopTabNavigator();

// create a component
const Toptab= () => {
    return (
        <View style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.ofwhite}
          barStyle="dark-content"
          translucent={false}
        /> 
        {/* <SearchHeader /> */}
        {/* <ScrollView> */}               
        <Tab.Navigator
          initialLayout="News"
          tabBarOptions={{
            style: {
              activeTintColor: COLORS.themecolor,
              backgroundColor: COLORS.headerColor,
              height: moderateScale(40),
            },
            activeTintColor: COLORS.themecolor,
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
          <Tab.Screen name="Top" component={Top} />
          {/* {login_status ? (
            <Tab.Screen name="Mconnect" component={Mconnect} />
          ) : null} */}
        
            <Tab.Screen name="Tag" component={Tags} />
      
        </Tab.Navigator>
        {/* </ScrollView> */}
      </View>
    );
  }
  
  // const mapStateToProps = state => {
  //   return {
  //     cart: state.CartItem.cartItems,
  //     total: state.CartItem.total,
  //   };
  // };
  
//   export default connect(mapStateToProps)(Home);
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: COLORS.PrimaryTheam,
//       color: COLORS.black,
//     },
//   });

//     );
// };

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Toptab;


{/* <View style={styles.container}>
            
            
</View> */}