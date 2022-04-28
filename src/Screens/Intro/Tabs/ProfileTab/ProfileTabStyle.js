import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    Headercontainer: {
        flex: 1,
    },
    profileHeaderView:{
        flex:0.3,
        paddingHorizontal: RFValue(20),
        paddingBottom:RFValue(20),
    },
    profileContent:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: RFValue(50),
        
    },
    AvatarImag:{
        height:RFValue(90),
        width:RFValue(100),
        borderRadius:RFValue(50),
        marginHorizontal:RFValue(20)
    },
    profileText:{
        fontSize:RFValue(20),
        width:RFValue(170),
        color: '#000',
        fontWeight:'bold'
    },
    profileFotter:{
        flex:0.7,
    }

});
export {styles}