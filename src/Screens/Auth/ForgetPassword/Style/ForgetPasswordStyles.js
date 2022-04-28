import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    ForgetMaincontainer: {
        height: '100%',
        
    },
    contentContainer:{
        paddingTop: RFValue(43),
        paddingHorizontal: RFValue(30),
        paddingBottom: RFValue(20)
    },
    iconTextContainer:{
        flexDirection: 'row',
        justifyContent: 'center',   
        paddingTop: RFValue(30),
        paddingBottom: RFValue(20)
    },
    forgetText:{
        paddingHorizontal: RFValue(10),
        paddingTop: RFValue(5),
        // alignSelf: 'center',
        
        fontSize: RFValue(22)
    },
    restInfo:{
        fontSize: RFValue(15),
        color: 'gray',
        alignSelf:'center',
        width: RFValue(350),
        paddingHorizontal: RFValue(20),
        paddingBottom: RFValue(20)
    },
    iconInputStyle:{
        flexDirection: 'row',
    },
    iconMainStyle:{
        paddingTop: RFValue(14),
        
    },
    inputText:{
        paddingHorizontal: RFValue(10),
        // marginTop: RFValue(10),
        // marginBottom: RFValue(10),
        width: '100%',
        borderBottomWidth : RFValue(1),
        borderColor: '#FF6B6B',
        // paddingHorizontal: RFValue(15),
        // borderRadius: RFValue(30),
        fontSize: RFValue(18),
        color: 'grey',
        marginBottom: RFValue(30),
        
    }
});
export  {styles}