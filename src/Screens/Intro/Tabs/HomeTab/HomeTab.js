//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,ScrollView,Image,TouchableOpacity,FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Entypo' 
import { styles } from './HomeTabStyle';
import {
    foodBurger,
    foodPallet,
    chinese,
    fries
}from '../../../../assets/index'
import ScrollViewComp from '../../../../shared/components/ScrollViewComp/ScrollViewComp';

// create a component
const HomeTab = () => {
    const lsitData=[
        {
            img: foodBurger,
            name: 'food content',
            
        },
        {
            img: foodPallet,
            name: 'food content',
            
        },
        {
            img: chinese,
            name: 'food content',
            
        },
        {
            img: fries,
            name: 'food content',
            
        },
        {
            img: foodPallet,
            name: 'food content',
            
        },
        {
            img: chinese,
            name: 'food content',
            
        },
    ]
    return (<>
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>Customer Services</Text>
                <View style={styles.iconInputContainer}>
                    <Icon style={styles.iconStyle} name='magnifying-glass' size={30} color={'#FF6B6B'} />
                    <TextInput style={styles.inputField} placeholder="Serch for food" placeholderTextColor={'lightgray'} />
                </View>
                <View >
                    <FlatList 
                    data={lsitData} showsHorizontalScrollIndicator={false} horizontal={true} renderItem={(item)=>{
                        return(
                            <>
                            <TouchableOpacity >
                                <Image style={styles.imgStyle} source={item.item.img}>
                               
                                </Image>
                                <Text style={styles.mapfoodText}>  {item.item.name}</Text>
                                
                            </TouchableOpacity>
                            </>
                        )
                    }}
                    />
               
                </View>
            </View>
            <View style={styles.footerList}>
               <ScrollViewComp />     
            </View>
        </View>
        </>
    );
};

// define your styles
// const styles = StyleSheet.create({
   

// });

//make this component available to the app
export default HomeTab;
