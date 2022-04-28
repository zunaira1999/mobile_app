//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image,TouchableOpacity } from 'react-native';
import {  RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../../../shared/theme/FontColor';
import Icon from 'react-native-vector-icons/FontAwesome'
import { profileAvatar,MapImg } from '../../../../assets';
import GoogleMapComp from '../../../../shared/components/GoogleMap/GoogleMapComp';

// create a component
const MyOrder = ({navigation}) => {
    // const [currentDate, setCurrentDate] = useState('');
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());
    
    useEffect(() => {
        let secTimer = setInterval( () => {
            setCurrentDate(new Date().toLocaleString())
        },1000)
    
        return () => clearInterval(secTimer);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerHeaderDate}>
                    <Text style={[colors.detailsStyle,{alignSelf:'center'}]}>
                        Current Date Time
                    </Text>
                    <Text style={styles.textStyle}>
                        {currentDate}
                    </Text>
            </View>
            <View style={styles.fotterContent}>
                <View style={[styles.deliveryBoyContainer,colors.textIconContainer]}>
                    <View style={colors.textIconContainer}>
                        <Image style={colors.AvatarImag} source={profileAvatar} />
                        <View style={styles.textDec}>
                        <Text style={[colors.FonSize]}>
                            Delivery Boy Name
                        </Text>
                        <Text style={[colors.FonSize]}>
                            Delivery Cost 100.0pkr
                        </Text>
                        </View>
                        
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Support')} style={{padding:RFValue(20),position:'absolute',right: RFValue(10)}}>
                        <Icon name='wechat' size={30} color="#FF6B6B" />
                    </TouchableOpacity>
                </View>
                <View >
                    <Image style={styles.mapImg} source={MapImg} />
                    {/* <GoogleMapComp /> */}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        padding: 10,
    },
    containerHeaderDate:{
        flex: 0.15,
        // backgroundColor:'red',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: RFValue(18),
        color: '#FF6B6B',
        fontWeight:'bold'
    },
    fotterContent:{
        flex: 0.9,
        // backgroundColor: 'red'
    },
    deliveryBoyContainer:{
        borderBottomWidth:1,
        borderBottomColor: 'lightgray'
    },
    textDec:{
        alignSelf:'center',

    },
    mapImg:{
        height: RFValue(450),
        // position:'absolute',
        // alignSelf: 'stretch',
        // right:0,
        // // left:0,
        // width:RFValue(500),
        resizeMode:'cover',
        // paddingRight:RFValue(10)
    }
});
export default MyOrder;
