//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Zinger } from '../../../../../assets';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../../../shared/theme/FontColor';
import Touch from '../../../../../shared/components/Button/Touch';
import Entypo from 'react-native-vector-icons/Entypo'
 
const OrderDetail = ({navigation}) => {
    const productDetailList = [
        {
            materialItem: 'Classic Chease Burger',

            price: '$222',
        },
        {
            materialItem: 'Classic Chease Burger',

            price: '$222',
        },
        {
            materialItem: 'Classic Chease Burger',
            price: '$222',
        },
        {
            materialItem: 'Classic Chease Burger',
            price: '$222',
        },
        {
            materialItem: 'Classic Chease Burger',
            price: '$222',
        },
    ]
    return (
        <View style={styles.Maincontainer}>
            <View style={styles.ContentContainer}>
                <View style={styles.iconTeaxtContainer}>
                    <Image style={styles.imgStyle} source={Zinger} />
                    <View>
                        <Text style={styles.textTittle}>Your Ordered Food Detail</Text>
                        <View style={[colors.textIconContainer,{justifyContent:'flex-start'}]}>
                            <Icon style={{ paddingHorizontal: RFValue(1) }} name='star' color={'#FF6B6B'} size={20} />
                            <Text style={[ colors.FonSize,{paddingHorizontal: RFValue(25)}]}>
                                4.9 Food Rating 
                            </Text>
                        </View>
                        <View style={colors.textIconContainer}>
                            <Icon style={{ paddingHorizontal: RFValue(1) }} name='ios-location' size={20} color={'#FF6B6B'} />
                            <TouchableOpacity>
                                <Text style={[colors.shortFontColor, colors.FonSize]}>
                                    Our location happyMeals
                                </Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.fotterContainer}>
                <View style={styles.productDetail}>
                    <FlatList
                        data={productDetailList}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                        <Text style={[colors.shortFontColor, styles.textDesign]}>
                                            {item.materialItem}
                                        </Text>

                                        <Text style={[colors.shortFontColor, styles.textDesign]}>
                                            {item.price}
                                        </Text>
                                    </View>
                                </>
                            )
                        }}
                    />
                </View>
                <View style={styles.deliveryProdDetail}>
                    <View style={[colors.textIconContainer, styles.inlineTextCont]} >
                        <Text style={[colors.detailsStyle,{color:'black'}]}>
                            Delivery Product Detail
                        </Text>
                        <TouchableOpacity>
                            <Text style={[ colors.FonSize,{color:'#FF6B6B' }]}>
                                Add Items <Entypo name='plus' size={20} color={'#FF6B6B'} />
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <View style={colors.textIconContainer}>
                            <Text style={colors.detailsStyle}>
                                Product Price
                            </Text>
                            <Text style={colors.detailsStyle}>
                                2450.00 Pkr
                            </Text>
                        </View>
                        <View style={colors.textIconContainer}>
                            <Text style={colors.detailsStyle}>
                                Delivery Cost
                            </Text>
                            <Text style={colors.detailsStyle}>
                                100pkr
                            </Text>
                        </View>

                    </View>
                </View>
                <Touch tittle='Check Out' onPress={()=>navigation.navigate('CheckOut')} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,

        backgroundColor: '#fff',


    },
    ContentContainer: {
        flex: 0.2,
        padding: RFValue(20),
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        // backgroundColor: 'red'

    },
    iconTeaxtContainer: {
        flexDirection: 'row',

        alignItems: 'center',
        paddingHorizontal:RFValue(10)
    },
    imgStyle: {
        height: RFValue(100),
        width: RFValue(100),
        resizeMode: 'contain',
        borderRadius: RFValue(10)
    },
    textTittle: {
        paddingHorizontal: RFValue(10),
        color: "#FF6B6B",
        fontSize: RFValue(18),
        fontWeight: 'bold'
    },
    fotterContainer: {
        flex: 0.8,
        paddingHorizontal: RFValue(20),

    },
    textDesign: {
        fontSize: RFValue(18),
        paddingHorizontal: RFValue(10),
        paddingBottom: RFValue(20),
        // paddingTop:RFValue(10)
    },
    inlineTextCont: {
        paddingBottom: RFValue(20),
        paddingTop: RFValue(20)
    }

});

export default OrderDetail;
