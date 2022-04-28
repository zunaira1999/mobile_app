//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Touch from '../Button/Touch';
import Icon from 'react-native-vector-icons/AntDesign'


const ProfileListComp = ({navigation}) => {
    const profileData = [
        {
            name: 'Privacy',
            iconImg : <Icon name='logout' size={20} color={'gray'} />,
            // onpress: navigation.navigate('Login')
        },
        {
            name: 'Purchase History',
            iconImg : <Icon name='logout' size={20} color={'gray'} />,
            // onpress: navigation.navigate('Login')
        },
        {
            name: 'Help & Support',
            iconImg : <Icon name='logout' size={20} color={'gray'} />,
            // onpress: navigation.navigate('Login')
        },
        {
            name: 'Settings',
            iconImg : <Icon name='logout' size={20} color={'gray'} />,
            // onpress: navigation.navigate('Login')
        },
        {
            name: 'Invite a Friend',
            iconImg : <Icon name='team' size={20} color={'gray'} />,
            // onpress: navigation.navigate('Login')
        },
        {
            name: 'Logout',
            iconImg : <Icon name='logout' size={20} color={'gray'} />,
            // onpress: navigation.navigate('Login')
        },
        
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={profileData} renderItem={(item) => {
                    return (
                        <>
                            {/* <Touch  tittle={item.item.name} /> */}
                            <TouchableOpacity  onPress={item.item.onpress} >
                                <View style={styles.touchBtn}>
                                    {/* {item.item.iconImg} */}
                                    <Text style={styles.btnText}>{item.item.name} </Text>
                                    
                                    <Icon  name='right' size={20} color="gray" />
                                    
                                </View>
                            </TouchableOpacity>
                        </>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    touchBtn: {
        height: RFValue(50),
        // width: RFValue(100),
        marginTop:RFValue(5),
        backgroundColor: 'lightgray',
        marginHorizontal:RFValue(20),
        paddingHorizontal:RFValue(20),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: 25,
        marginTop:RFValue(10)
    },
    btnText:{
        color: 'gray',
        fontSize: RFValue(18)
    },
   
});

//make this component available to the app
export default ProfileListComp;
