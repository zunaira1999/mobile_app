import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
const colors = StyleSheet.create({
    color: {
        color: '#FF6B6B'
    },
    textIconContainer:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    FonSize:{
        fontSize: RFValue(15),
        color:'gray'
    },
    shortFontColor:{
        color:'gray'
    },
    detailsStyle: {
        fontSize:RFValue(16),
        color: 'gray',
        // paddingHorizontal:RFValue(20),
        paddingBottom: RFValue(10)
    },
    AvatarImag:{
        height:RFValue(90),
        width:RFValue(100),
        borderRadius:RFValue(50),
        marginHorizontal:RFValue(20)
    },
    AvatarImag:{
        height:RFValue(90),
        width:RFValue(100),
        borderRadius:RFValue(50),
        marginHorizontal:RFValue(20)
    },
    
    
})

export {
    colors,
    
}
