//import liraries
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// create a component
function Touch({navigation,tittle,onPress}) {
    return (
        <View>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.touchBtn}>
                <Text style={styles.btnText}>{tittle} </Text>
            </View>
        </TouchableOpacity> 
         
        </View>
    );
};


const styles = StyleSheet.create({
    touchBtn: {
        height: RFValue(50),
        // width: RFValue(100),
        margin:RFValue(10),
        backgroundColor: '#FF6B6B',
        paddingHorizontal:20,
        // marginHorizontal:20
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 25,
    },
    btnText:{
        color: '#fff',
        fontSize: RFValue(18)
    }
});

export default Touch;
