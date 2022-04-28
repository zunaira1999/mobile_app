//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
// import { colors } from '../../../../shared/theme/FontColor';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatSupportList from '../../../../shared/components/ChatSupportList/ChatSupportList'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Touch from '../../../../shared/components/Button/Touch';


// create a component
const Chat = ({navigation}) => {
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
               
                    <View style={[styles.IconText]}>
                        <Icon style={{ paddingTop: RFValue(5) }} name='magnify' size={25} color={'gray'} />
                        <TextInput placeholderTextColor={'gray'} placeholder='Serch for Help..' style={styles.inputField} />
                    </View>
              
                <ChatSupportList onPress={()=>navigation.navigate('LiveChat')}  />
            </KeyboardAwareScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: RFValue(10),
        backgroundColor: '#fff',
    },

    IconText: {
        flex: 0.23,
        height: RFPercentage(8),
        paddingHorizontal: RFValue(10),
        paddingVertical: RFValue(8),
        flexDirection: 'row',
        borderRadius: RFValue(30),
        backgroundColor: '#EEEEEE'
        // backgroundColor:'red'
    },
    inputField: {
        width: RFValue(300),
        // borderWidth:1,
        padding: RFValue(10),
        color: 'gray',
        fontSize: RFValue(15)
    }
});
export default Chat;
