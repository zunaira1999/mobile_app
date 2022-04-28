import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FF6B6B',
    },
    OutLetHead:{
        flex:0.47,
        // backgroundColor:'blue',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:RFValue(20)
    },
    ContentContainer:{
        marginTop: RFValue(50),
        paddingTop:RFValue(10),
        paddingBottom:RFValue(20)
    },
    headTittle:{
        fontSize:RFValue(22),
        fontWeight:'bold',
        paddingTop:RFValue(10),
        paddingBottom:RFValue(20),
        color: '#fff'
    },
    headDescription:{
        width:RFValue(180),
        fontSize:RFValue(15),
        color:'#fff'
    },
    btnContainer:{
        backgroundColor: '#fff',
        alignSelf: 'baseline',
        paddingHorizontal: 20,
        height: 40,
        justifyContent:'center',
        borderRadius: 20,
        marginTop:RFValue(25)
    },
    btnText:{
        color: '#FF6B6B',
        fontSize: RFValue(18),
        paddingHorizontal: RFValue(5),
        fontWeight: '700'
    },
    imgStyleDeliver:{
        height:RFValue(150),
        width:RFValue(150),
        transform: [{scaleX:-1}],
        borderRadius:RFValue(80),
        marginTop:RFValue(120)
    },
    outLetFotter:{
        flex:0.53,
        backgroundColor:'#fff',
        borderTopLeftRadius:RFValue(40),
        borderTopRightRadius:RFValue(40),
        // justifyContent:'center',
        // alignItems:'center'
        paddingHorizontal:RFValue(20)

    }
});
export {styles}