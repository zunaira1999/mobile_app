import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        paddingTop:RFValue(20),
        paddingHorizontal:RFValue(20)
    },
    contentContainer:{
        flex:0.5,
         padding:RFValue(10),
    },
     text:{
         color: '#000',
         fontSize: RFValue(25),
         marginBottom: RFValue(20),
         paddingTop: RFValue(10)
     },
     iconInputContainer:{
         borderWidth:1,  
         paddingHorizontal:RFValue(10),
         paddingVertical:RFValue(3),
         flexDirection:'row',
         borderRadius:RFValue(50),
         backgroundColor: '#fff',
         borderColor:'#fff',
         marginBottom: RFValue(20)
     },
     inputField:{
         width:'90%',
         paddingHorizontal:RFValue(10),
         fontSize: RFValue(18),
         color:'gray',
         
     },
     iconStyle:{
         paddingTop:RFValue(10)
     },
     
     
     imgStyle:{
         height:110,
         width: 110,
         margin: RFValue(10),
         borderRadius: RFValue(30),
         resizeMode:'contain'
     },
     mapfoodText:{
         color:'gray',
         fontSize:RFValue(16),
         alignSelf:'center'
     },
     footerList:{
         flex: 0.499,
         marginTop:RFValue(5)
     }
})
export {styles}