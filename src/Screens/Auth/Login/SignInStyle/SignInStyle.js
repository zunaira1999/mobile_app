import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    MAincontainer: {
        height: '100%',

    },
    contentContainer: {
        paddingHorizontal: RFValue(30),
        paddingTop: RFValue(30)
    },
    tittle: {
        fontSize: RFValue(22),
        paddingTop: RFValue(20),
        marginBottom: RFValue(20),
        fontWeight: 'bold',
        width: RFValue(150)
    },
    iconInputStyle:{
        flexDirection: 'row',
    },
    iconMainStyle:{
        paddingTop: RFValue(26),
        // marginHorizontal:RFValue(10)
    },
    inputText: {
        marginTop: RFValue(10),
        marginBottom: RFValue(10),
        borderBottomWidth : RFValue(1),
        borderColor: '#FF6B6B',
        width:'90%',
        paddingHorizontal: RFValue(15),
        // borderRadius: RFValue(30),
        fontSize: RFValue(18),
        color: 'grey',

    },
    forgetPassword:{
        fontSize: RFValue(15),
        padding:RFValue(10)
    },
    
    bottomText:{
        justifyContent:'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: RFValue(30)
    },
    text:{
        color: 'gray',
        fontSize: RFValue(18),
        paddingHorizontal: RFValue(5)
    }
});
export {styles}