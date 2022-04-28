//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    mixFood,
    mixPartyFood,
    partyFood,
    salad,
    tableSalad
} from '../../../assets';

// create a component
const ScrollViewComp = ({ horizontanl }) => {
    const listData = [
        {
            img: mixFood,
            tittle: 'Provide You Healthy Food',
            description: 'Healthy foods are those that provide you with the nutrients you need to sustain your bodys well-being and retain energy.'
        },
        {
            img: mixPartyFood,
            tittle: 'Provide You Healthy Food',
            description: 'Healthy foods are those that provide you with the nutrients you need to sustain your bodys well-being and retain energy.'
        },
        {
            img: partyFood,
            tittle: 'Provide You Healthy Food',
            description: 'Healthy foods are those that provide you with the nutrients you need to sustain your bodys well-being and retain energy.'
        },
        {
            img: salad,
            tittle: 'Provide You Healthy Food',
            description: 'Healthy foods are those that provide you with the nutrients you need to sustain your bodys well-being and retain energy.'
        },
        {
            img: tableSalad,
            tittle: 'Provide You Healthy Food',
            description: 'Healthy foods are those that provide you with the nutrients you need to sustain your bodys well-being and retain energy.'
        },
        {
            img: salad,
            tittle: 'Provide You Healthy Food',
            description: 'Healthy foods are those that provide you with the nutrients you need to sustain your bodys well-being and retain energy.'
        },
    ]
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()} showsVerticalScrollIndicator={false} data={listData} renderItem={(item) => {
                    return (
                        <>
                            <View style={styles.container} >
                                <TouchableOpacity >
                                    <Image style={styles.imgDesign} source={item.item.img} />
                                    <Text style={styles.tittleStyle}>
                                        {item.item.tittle}
                                    </Text>
                                    <Text style={styles.decStyle}>
                                        {item.item.description}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }} />

        </View>
    );
};


const styles = StyleSheet.create({

    imgDesign: {
        height: 250,
        width: 322,
        marginTop: RFValue(20),
        borderTopRightRadius: RFValue(40),
        borderTopLeftRadius: RFValue(40)
    },
    tittleStyle: {
        color: '#000',
        fontSize: RFValue(20),
        padding: RFValue(8),
        fontWeight: 'bold'
    },
    decStyle: {
        color: 'gray',
        fontSize: RFValue(15),
        paddingHorizontal: RFValue(8),
    }
});


export default ScrollViewComp;
