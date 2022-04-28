//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/EvilIcons'
import {
    zingerBurger, foodBurger,
    foodPallet,
    chinese,
    fries,
    mixFood,
    mixPartyFood,
    partyFood,
    salad,
    tableSalad,
    Zinger
} from '../../../../assets'
import ScrollViewComp from '../../../../shared/components/ScrollViewComp/ScrollViewComp';
import Touch from '../../../../shared/components/Button/Touch';
import { symbolicateLogLazy } from 'react-native/Libraries/LogBox/Data/LogBoxData';
// create a component
const ExploreMore = ({ navigation }) => {

    const lsitData = [
        {
            img: foodBurger,
            name: 'food content',
            price:400,
            tittle: 'Food Detail',
            shortDes: 'Healthy foods are those that provide you with the nutrients you need',
            detailImage: Zinger,
            // ordeDetail: navigation.navigate('OrderDetail')
            icon: <Icon name='cart' size={40} color={'red'} />
        },
        {
            img: foodPallet,
            name: 'food content',
            price:400,
            tittle: 'Food Detail',
            shortDes: 'Healthy foods are those that provide you with the nutrients you need',
            detailImage: Zinger,
            // ordeDetail: navigation.navigate('OrderDetail')
            icon: <Icon name='cart' size={40} color={'red'} />
        },
        {
            img: chinese,
            name: 'food content',
            price:400,
            tittle: 'Food Detail',
            shortDes: 'Healthy foods are those that provide you with the nutrients you need',
            detailImage: Zinger,
            // ordeDetail: navigation.navigate('OrderDetail')
            icon: <Icon name='cart' size={40} color={'red'} />
        },
        {
            img: fries,
            name: 'food content',
            price:400,
            tittle: 'Food Detail',
            shortDes: 'Healthy foods are those that provide you with the nutrients you need',
            detailImage: Zinger,
            // ordeDetail: navigation.navigate('OrderDetail')
            icon: <Icon name='cart' size={40} color={'red'} />
        },
        {
            img: foodPallet,
            name: 'food content',
            price:400,
            tittle: 'Food Detail',
            shortDes: 'Healthy foods are those that provide you with the nutrients you need',
            detailImage: Zinger,
            // ordeDetail: navigation.navigate('OrderDetail')
            icon: <Icon name='cart' size={40} color={'red'} />
        },
        {
            img: chinese,
            name: 'food content',
            price:400,
            tittle: 'Food Detail',
            shortDes: 'Healthy foods are those that provide you with the nutrients you need',
            detailImage: Zinger,
            // ordeDetail: navigation.navigate('OrderDetail')
            icon: <Icon name='cart' size={40} color={'red'} />
        },
    ]
    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.StyleImg} source={zingerBurger} />
                <View style={styles.textPriceCont}>
                    <Text style={styles.textPrice}>price: 300 </Text>
                </View>
            </View>
            <View style={styles.FotterContainer}>
                <View style={styles.fotterHeadText}>

                    
                    <View style={styles.faltListStyle}>
                        <SafeAreaView>
                            <ScrollView>
                            <Text style={styles.fotterTittle}>
                        Really Cool Burger
                    </Text>
                    <Text style={styles.shortDes}>
                        Healthy foods are those that provide you with the nutrients you need
                    </Text>
                                <View>
                                    <FlatList
                                        data={lsitData} style={{ position: 'relative',backgroundColor:'lightgray',borderRadius:RFValue(10) }}
                                        showsHorizontalScrollIndicator={false} horizontal={true} renderItem={(item) => {
                                            return (
                                                <>
                                                    <TouchableOpacity >
                                                        <Image style={styles.imgStyle} source={item.item.img}>

                                                        </Image>
                                                        <Text style={styles.mapfoodText}>  {item.item.name}</Text>
                                                        <Text style={styles.mapfoodText}>Price:  {item.item.price}</Text>
                                                    </TouchableOpacity>
                                                </>
                                            )
                                        }}

                                    />
                                </View>
                                {/* <Text style={{color:'black'}}>fdgdfgfdgsdf</Text> */}
                                <View style={styles.fotterScroll}>
                                    {/* <ScrollViewComp /> */}
                                        <FlatList data={lsitData}
                                        renderItem={(item)=>{
                                            return(
                                                <>
                                                <View style={styles.categoriesContainer}>
                                                    <TouchableOpacity onPress={()=>(navigation.navigate('OrderDetail'))}>
                                                        <Image style={styles.imgStyle} source={item.item.detailImage}></Image>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={()=>navigation.navigate('OrderDetail')}>
                                                        <Text style={styles.TittleTextImg}>
                                                            {item.item.tittle}
                                                        </Text>
                                                        <Text style={styles.TittleDesImg}>
                                                            {item.item.shortDes}
                                                        </Text>
                                                        
                                                    <View style={styles.cartIconStyle}>
                                                            <TouchableOpacity onPress={()=>navigation.navigate('PlaceOder')}> 
                                                               <Text>{item.item.icon} </Text> 
                                                                
                                                            </TouchableOpacity>
                                                    </View> 
                                                    </TouchableOpacity>
                                                </View>
                                                </>
                                            )
                                        }}
                                        />
                                </View>
                                <View>
                                    <Touch tittle='Place order' onPress={()=>navigation.navigate('OrderDetail')} />
                                </View>
                            </ScrollView>
                        </SafeAreaView>


                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#FF6B6B',
    },
    headerContainer: {
        flex: 0.3,
        // backgroundColor: 'red'
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    StyleImg: {
        // flex:1,
        // marginHorizontal:RFValue(20),
        height: RFValue(130),
        width: RFValue(230),
        resizeMode: 'contain',
        borderRadius: RFValue(10)
    },
    textPriceCont: {
        position: 'absolute',
        bottom: RFValue(0),
        right: RFValue(0),
        paddingHorizontal: RFValue(30),

    },
    textPrice: {
        fontSize: RFValue(20),
        paddingBottom: RFValue(20),
        // backgroundColor:'red'
        color: '#fff'
    },
    FotterContainer: {
        flex: 0.7,
        backgroundColor: '#fff',
        borderTopRightRadius: RFValue(40),
        borderTopLeftRadius: RFValue(40),
        // paddingBottom:RFValue(40)
    },
    fotterHeadText: {
        paddingHorizontal: RFValue(20),
        paddingBottom: RFValue(10),
        paddingTop: RFValue(20),
    },
    fotterTittle: {
        color: '#FF6B6B',
        paddingTop: RFValue(20),
        paddingHorizontal: RFValue(20),
        fontSize: RFValue(20),
        fontWeight: 'bold'
    },
    shortDes: {
        color: '#FF6B6B',
        paddingHorizontal: RFValue(20),
        paddingBottom: RFValue(20),
        paddingTop: RFValue(10),
        fontSize: RFValue(14)
    },
    faltListStyle: {
        // flex:1,

        // height: RFValue(460),
        // backgroundColor:'red'
    },
    imgStyle: {
        height: 110,
        width: 110,
        margin: RFValue(8),
        // alignSelf:'center'
        borderRadius: RFValue(20),
        resizeMode: 'contain'
    },
    mapfoodText: {
        color: 'gray',
        // height: RFValue(150)
        // paddingHorizontal: RFValue(2),
        fontSize: RFValue(18),
        alignSelf: 'center',
        paddingBottom: RFValue(10)
    },
    categoriesContainer:{
        // shadowColor: 'red',
        borderRadius:RFValue(20),
    elevation: 2,
        flexDirection:'row',
        paddingTop:RFValue(10),
        alignItems:'center',
   
       marginTop: RFValue(20),
       marginBottom:RFValue(10),
       marginHorizontal:RFValue(8),
    

    },
    TittleTextImg:{
        color:'#FF6B6B',
        fontSize: RFValue(18),
        fontWeight:'bold'
    },
    TittleDesImg:{
        color:'gray',
        width:RFPercentage(25),
        fontSize:RFValue(13),
        alignSelf:'center',
        paddingHorizontal:RFValue(5)
    },
    cartIconStyle:{
        // justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal:RFValue(20)
    }
    // fotterScroll:{
    //     flex:1
    //     // marginBottom:RFValue(30)
    // }
});

//make this component available to the app
export default ExploreMore;
