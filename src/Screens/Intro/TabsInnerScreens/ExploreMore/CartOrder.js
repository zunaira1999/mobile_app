//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/EvilIcons'
import { colors } from '../../../../shared/theme/FontColor';
// create a component
const OrderCart = () => {
    return (
        <View style={styles.container}>
            <Icon name='cart' size={RFValue(290)} color={'red'} />
            <Text style={[styles.orderTextTittle,colors.color]}>
                Your Cart Is Empty
            </Text>
            <Text style={[styles.orderShortText]}>
            Make Sure Your Basket has some Items. Please Add Some Food In It 
            </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    orderTextTittle:{
        fontSize: RFValue(30),
        paddingHorizontal:RFValue(20),
        paddingBottom: RFValue(20)
    },
    orderShortText:{
        color:'gray',
        paddingHorizontal:RFValue(30),
        // alignSelf:'center',
        width:RFValue(300),
        fontSize:RFValue(20)
    }
});

//make this component available to the app
export default OrderCart;
