//import liraries
import React, { Component } from 'react';
import { View, Text,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import { profileAvatar } from '../../../../assets';
import ProfileListComp from '../../../../shared/components/ProfileList/ParofileListComp';
import { styles } from './ProfileTabStyle';
// create a component
const ProfileTab = ({route,navigation}) => {
    // const { myName } = route.params;
    return (
        <>
        <SafeAreaView style={styles.Headercontainer}>
            <View style={styles.profileHeaderView}>
                <View style={styles.profileContent}>
                    <TouchableOpacity>
                <Image style={styles.AvatarImag} source={profileAvatar} />
                </TouchableOpacity>
                <Text style={styles.profileText}>Welcom PersonName! </Text>
                </View>
            </View>
            <View style={styles.profileFotter}>
                <ProfileListComp />
            </View>
        </SafeAreaView>
        </>
    );
};



export default ProfileTab;
