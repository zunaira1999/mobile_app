//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import { colors } from '../../../shared/theme/FontColor';
import  Icon from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Touch from '../../../shared/components/Button/Touch';
import { styles } from './Style/ForgetPasswordStyles';


const ForgetPassword = () => {
    return (
        <View style={styles.ForgetMaincontainer}>
            <View style={styles.contentContainer}>
                <View style={styles.iconTextContainer}> 
                <Icon style={styles.iconStyle} name='user-lock' size={30} color={'#FF6B6B'}></Icon>
                <Text style={[styles.forgetText,colors.color]}>Forget Password</Text>
                </View>
                <Text style={styles.restInfo}>
                    We just Need Your Registered Email Address to send you Password Reset
                </Text>
                
                <KeyboardAwareScrollView >
                <View style={styles.iconInputStyle}>
                    <Fontisto style={styles.iconMainStyle} name='email' color={'#FF6B6B'} size={20} />
                <TextInput placeholderTextColor={'gray'} placeholder='Email' style={styles.inputText} />
                </View>
                </KeyboardAwareScrollView>
                <Touch tittle='Submit' />
            </View>
        </View>
    );
};


export default ForgetPassword;
