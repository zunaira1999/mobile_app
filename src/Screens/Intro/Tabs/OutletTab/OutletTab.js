//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import ScrollViewComp from '../../../../shared/components/ScrollViewComp/ScrollViewComp';
import { deliverProduct } from '../../../../assets/index';
import { styles } from './OutletTabStyle';
// create a component
const OutletTab = ({navigation}) => {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.OutLetHead}>
                <View style={styles.ContentContainer}>
                    <Text style={styles.headTittle}>Latest Offers</Text>
                    <Text style={styles.headDescription}>
                    The Summer Food Service Program ensures children from low-income areas receive nutritious meals
                    </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('ExploreMore')}>
                        <View style={styles.btnContainer}> 
                            <Text style={styles.btnText}>Explore More</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={styles.imgStyleDeliver} source={deliverProduct} />
                    
                </View>
            </View>
            <View style={styles.outLetFotter}>
                <ScrollViewComp />
            </View>
        </View>
        </>
    );
};


export default OutletTab;
