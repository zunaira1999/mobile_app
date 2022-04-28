import {StyleSheet} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    container: {
        
        margin:RFValue(10),
    },
    cardContainer:{
        
        height:'100%'
    },
    cardLiveChat:{
        height:RFPercentage(20),
        backgroundColor:'#F6FFA4',
        margin:RFValue(10),
        justifyContent:'center',
        elevation:5,
        paddingHorizontal:RFValue(10),
        borderRadius:RFValue(20)
    },
    ChatImag:{
        height:RFValue(100),
        width:RFValue(100),
    },
    tittleChat:{
        fontSize: RFValue(18),
        width:RFValue(150),
        fontWeight:'bold'
    },
    cardFlatListChat:{
        paddingTop: RFValue(10),
        paddingHorizontal: RFValue(8),
        paddingBottom:RFValue(10),
    },
    catogryFlatlist:{
        paddingHorizontal: RFValue(10),
        marginHorizontal:RFValue(8),
        marginTop:RFValue(3),
        paddingVertical:RFValue(10),
        borderRadius:RFValue(10),
        borderBottomColor:'lightgray',
        elevation:1.2
    }
});
export {styles}