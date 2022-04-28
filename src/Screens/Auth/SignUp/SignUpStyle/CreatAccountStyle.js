import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    Maincontainer:{
        height: '100%',
        width: '100%',
        // backgroundColor:'lightgray'
    },
    contentContainer:{
        paddingHorizontal: RFValue(20),
        padding: RFValue(20),
        // backgroundColor: 'red',
        marginTop: RFValue(40),
        paddingBottom:RFValue(20) ,
        justifyContent:'center'
        
    },
    headTittle:{
        fontSize: RFValue(22),
        width: RFValue(150)
    },
    inputTextContainer:{
        marginTop: RFValue(30),
        justifyContent:'center',
        marginBottom: RFValue(20)
    },
    iconInputStyle:{
        flexDirection: 'row',
    },
    iconMainStyle:{
        paddingTop: RFValue(26),
        // marginHorizontal:RFValue(10)
    },
    inputText:{
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
    btnMain:{
        justifyContent:'flex-end',
        alignItems: 'flex-end'
    },
    btn_Text:{
        color: '#FF6B6B',
        fontSize: RFValue(15)
    },
    
    accountInfo:{
        color: 'gray',
        paddingHorizontal: RFValue(20),
        alignSelf:'center'
    }
});
export {styles}