//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { pattrnImg } from '../../../../../assets';
import { colors } from '../../../../../shared/theme/FontColor';

// create a component
const LiveChat = () => {
    const { width } = Dimensions.get('window')
    const [value, setValue] = useState('')
    const [messageText,setMessageText] = useState([
        {
            name : ''
        }
    ])

    const handleChange = (text) => {
        setValue(text)
    }
    // const senText =(text)=>{
    //     setValue(text)
    // }

    return (
        <>
            <ImageBackground style={{ flex: 1, opacity: 0.4 }} source={pattrnImg} />
            <KeyboardAwareScrollView style={styles.messageStyle}>
            <View style={styles.contentMEssages}>
               <Text onChangeText={value}  style={[colors.FonSize,{color: '#fff'}]}>
                   {/* {
                       value
                   } */}
                    HI There!
               </Text>
               
           </View>
           {/* <View style={styles.contentMEssages}>
               <Text style={{color: '#fff'}}>gjhgjhgjhg</Text>
               
           </View> */}
            </KeyboardAwareScrollView>
           
            <View style={[styles.container, width]}>
                <View style={[styles.innerContainer, { width: width - 60 }]}>
                    <TextInput value={value} onChangeText={handleChange} style={styles.inputText} multiline placeholder='Enter Message' placeholderTextColor={'gray'} />
                </View>
                <TouchableOpacity style={styles.ChatICons}  >
                    {value.trim() ? (
                        <Ionicons name='send-sharp' size={20} color={'#fff'} />
                        
                    )
                        : (
                            <Foundation name='microphone' color={'#fff'} size={30} />
                        )
                    }
                </TouchableOpacity>
            </View>
        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0,
        maxHeight: RFValue(100),
        padding: RFValue(5),


    },
    messageStyle:{
        flex: 1,
        position:'absolute',
        right: RFValue(0),
        // backgroundColor: '#FF6B6B',
        paddingHorizontal: RFValue(10),
        margin:RFValue(20)
    },
    contentMEssages:{
        marginTop:RFValue(10),
        backgroundColor: '#FF6B6B',
        paddingHorizontal: RFValue(20),
        paddingVertical: RFValue(10),
        borderRadius: RFValue(15)

    },
    innerContainer: {
        backgroundColor: 'white',
        paddingHorizontal: RFValue(10),
        borderRadius: RFValue(50),
        elevation: 2

    },
    inputText: {
        height: '100%',
        color: 'gray',
        fontSize: RFValue(15),
    },
    ChatICons: {
        // position:'absolute',
        // right: 0,
        // bottom:0,
        justifyContent: 'center',
        alignItems: 'center',
        width: RFValue(45),
        height: RFValue(45),
        borderRadius: RFValue(24),
        backgroundColor: '#FF6B6B',
        elevation: 2
    }
});

//make this component available to the app
export default LiveChat;
