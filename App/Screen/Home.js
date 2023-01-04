import React from 'react'
import { SafeAreaView, FlatList, View, Text, TextInput, Pressable, Image, StyleSheet } from 'react-native'
import { Card, Icon, StatusBar } from 'react-native-basic-elements'
import Category from '../Components/Category'
import Event from '../Components/Event'
import Explore from '../Components/Explore'
import { COLORS } from '../Constants/Colors'
import { FONTS } from '../Constants/Fonts'
import NavigationService from '../Service/Navigation'

const DATA = [

    {
        img: require('../assets/Profile/17.jpeg'),
        title: 'Shop'
    },
    {
        img: require('../assets/Profile/16.jpeg'),
        title: 'Shop'
    },
    {
        img: require('../assets/Profile/11.jpeg'),
        title: 'Shop'
    },
    {
        img: require('../assets/Profile/13.jpeg'),
        title: 'Shop'
    },
    {
        img: require('../assets/Profile/addidas.png'),
        title: 'Shop'
    },
    {
        img: require('../assets/Profile/amenities.jpeg'),
        title: 'Shop'
    },
    {
        img: require('../assets/Profile/qr.png'),
        title: 'Shop'
    },
    {
        img: require('../assets/Profile/qr.png'),
        title: 'Shop'
    },
    {
        img: require('../assets/Profile/qr.png'),
        title: 'Shop'
    }
]


const EXPLORE = [
    {
        img: require('./../assets/Profile/1.jpeg'),
        title: 'Dine'
    },

    {
        img: require('./../assets/Profile/6.jpeg'),
        title: 'Dine'
    },
    {
        img: require('./../assets/Profile/2.jpeg'),
        title: 'Dine'
    },

    {
        img: require('./../assets/Profile/3.jpeg'),
        title: 'Dine'
    },

    {
        img: require('./../assets/Profile/4.jpeg'),
        title: 'Dine'
    },

    {
        img: require('./../assets/Profile/5.jpeg'),
        title: 'Dine'
    },

    {
        img: require('./../assets/Profile/9.jpeg'),
        title: 'Dine'
    },

    {
        img: require('./../assets/Profile/11.jpeg'),
        title: 'Dine'
    },
]

const EVENT = [
    {
        img: require('./../assets/Profile/amenities.jpeg'),

    },

    {
        img: require('./../assets/Profile/1.jpeg'),

    },

    {
        img: require('./../assets/Profile/2.jpeg'),

    },
    {
        img: require('./../assets/Profile/3.jpeg'),

    },
    {
        img: require('./../assets/Profile/4.jpeg'),

    },
    {
        img: require('./../assets/Profile/11.jpeg'),

    },
]

// const Item = ({ title }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//         {/* <Image  */}
//     </View>
// );

function Home() {
    // const renderItem = ({ item }) => (
    //     <Item title={item.img}/>,
    //     <Item title={item.title}/>

    // );
    return (


        <View style={styles.container}>
            <StatusBar
            backgroundColor={'#fff'}
            barStyle="dark-content"
            />

            <View style={styles.imageView}>
                <Pressable onPress={()=>NavigationService.openDrawer()}>
                <Image source={require('./../assets/Profile/Ann.jpeg')}
                    style={styles.image} />
                </Pressable>

                <View style={styles.textView}>

                    <Text>Good Morning</Text>
                    <Text style={styles.name}>Ann Haiduk</Text>
                </View>
                <View style={styles.viewIcon}>
                    <Icon name='heart' type='AntDesign'
                    style={styles.iconView}/>
                   </View>
                <View style={styles.viewIcon}>
                    <View style={styles.starView}>
                        <Text>*</Text>
                    </View>
                    <Icon name='bell' type='FontAwesome'
                       style={styles.iconView}  />
                </View>
             


            </View>

            <Pressable
                onPress={() => NavigationService.navigate('Exploring')}
            />

            <Card style={styles.searchView}>
                <Icon name='search1' type='AntDesign' />
                <TextInput placeholder='Search'
                    style={styles.searchText}
                />
            </Card>

            {/* 
           <View style={{}}>
            <FlatList
            showsHorizontalScrollIndicator={false}
           
            numColumns={4}
            data={EXPLORE}
            renderItem={({item})=>{
                return(
                    <Explore data={item}/>
                )
            }}
            />

           </View> */}
            <View style={styles.mapView}>
                {
                    EXPLORE.map((item) => {
                        return (
                            <Explore data={item} />
                        )
                    })
                }
            </View>


            <View style={styles.discoverView}>
                <Text style={styles.textDiscoverUpcomming}
                >Discover Top Stores</Text>
                <Text style={styles.textViewall
                }>View all</Text>
            </View>

            <View style={styles.categoryView}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={DATA}
                    renderItem={({ item }) => {
                        return (
                            <Category data={item} />
                        )
                    }}

                />

            </View>


            <View style={styles.upcomingEvent}>
                <Text style={styles.textDiscoverUpcomming}>Upcomming Events</Text>
                <Text style={[styles.textViewall, {
                    paddingHorizontal: 126
                }]}>View all</Text>
            </View>
            <View style={styles.eventMain}>
                <View style={styles.eventView}>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={EVENT}
                        renderItem={({ item }) => {
                            return (
                                <Event data={item} />
                            )

                        }
                        }

                    />
                </View>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'red'
        // marginTop: 15
        flex:1,
        backgroundColor:'#fff'
    },
    image: {
        height: 50,
        width: 50,
        marginHorizontal: 5,
        borderRadius: 25,

    },
    textView: {
        flex: 1,

    },
    imageView: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop:29
        // alignItems:'center'

    },
    name: {
        color: 'black',
        fontFamily: FONTS.bold,
        marginBottom: 30,
        // paddingHorizontal:20
    },
    searchText: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: 0,
        paddingHorizontal: 10
    },
    searchView: {
        marginHorizontal: 10,
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20

    },
    shop: {
        flexDirection: 'row',
        height: 50,
        width: 50,
        alignItems: 'center',
    },
    discoverView: {
        flexDirection: 'row'
    },
    textViewall: {
        color: COLORS.darkyellow,
        paddingHorizontal: 120,
        fontFamily: FONTS.bold
    },
    textDiscoverUpcomming: {
        fontFamily: FONTS.bold,
        color: 'black',
        fontSize: 16
    },
    upcomingEvent: {
        flexDirection: 'row',
        marginBottom: 15
    },
    eventMain: {
        // flexDirection: 'row',

    },
    eventView: {
        flexDirection: 'row',

    },

    nike: {
        // marginHorizontal:30
        borderRadius: 20
    },
    mapView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // backgroundColor:'blue'
        marginBottom: 20
    },
    categoryView: {
        marginBottom: 10,
        borderRadius: 20
    },
    viewIcon: {
        marginHorizontal: 4,
        paddingHorizontal:10,
        marginTop: 6,
        height:40,
        backgroundColor:COLORS.Offwhite,
        alignItems:'center',
        justifyContent:'center',
        width:40,
        borderRadius:20
        
    },
    iconView: {
        // left:40,
        // bottom:20,
    },
    starView:{
        position:'absolute',
        // backgroundColor:'yellow',
        backgroundColor:COLORS.darkyellow,
        // bottom:40,
        top:0,
        height:10,
        left:20,
        width:10,
        borderRadius:5
        
        
    }

})