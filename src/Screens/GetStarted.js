import  React from 'react';
import { View, Text, StyleSheet ,Image,FlatList,TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { colors,backgroundColr } from '../shared/theme/FontColor';
import { fastFoodImg,deliveryImg, locationImg } from '../assets/index';
import Touch from '../shared/components/Button/Touch';
function GetStarted({navigation}) {
  const listData= [
    {
      image: fastFoodImg,
      tittle: "Fast Food You Love",
      summary: 'The Summer Food Service Program ensures children from low-income areas receive nutritious meals, including milk',
    },
  {
      image: deliveryImg,
      tittle: "Fast Delivery",
      summary: 'The Summer Food Service Program ensures children from low-income areas receive nutritious meals, including milk',
      
  },
  {
      image: locationImg,
      tittle: "Live Tracking",
      summary: 'The Summer Food Service Program ensures children from low-income areas receive nutritious meals, including milk',
      
  },
  ]
  return (<>
    <View style={styles.getStartedMain}>    
        <FlatList 
          horizontal ={true}
          data={listData} renderItem={(data)=>{
            return (
              <>
                <View style={styles.MainHeaderGetStarted}>
                  <Image style={styles.imgStyle} source={data.item.image} ></Image>
                  <Text style={[styles.tittleText,colors.color]}>{data.item.tittle} </Text>
                  <View style={styles.summaryContainer}>
                  <Text style={styles.summary}>{data.item.summary} </Text>
                  </View>
                </View>
              </>
            )
          }}
        />
        
    </View> 
        <View style={styles.MainFotterGetStarted}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <View style={[styles.touchBtn, {backgroundColor: '#FF6B6B'} ]}>
                <Text style={styles.btnText}>Sign In Your Account</Text>
            </View>
        </TouchableOpacity> 
            {/* <Touch  /> */}
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}  style={styles.touchBtn}>
            <View >
                <Text style={styles.btnText}>Create Your Account</Text>
            </View>
        </TouchableOpacity> 
        </View>
    </>
  )  
 

}
const styles = StyleSheet.create({
  getStartedMain:{
      height: '100%' ,
      width: '100%',
      backgroundColor: '#fff',
      flex: 0.8,
  },
  MainHeaderGetStarted:{
     
     paddingTop:RFValue(40),
      margin:30,
      // backgroundColor: 'pink',
     
      alignItems: 'center'
  },
  imgStyle:{
      height:RFValue(270),
      width: RFValue(300),
      alignSelf: 'center',
      
  },
  tittleText:{
    fontSize: RFValue(22),
    
    margin: RFValue(10),
    fontWeight: 'bold'
    
  },
  summaryContainer:{
    width: RFValue(230),
    paddingTop: RFValue(10),
    justifyContent:'center',
    alignItems:'center'
  },
  summary:{
    color: 'gray',
    
  },
  MainFotterGetStarted:{
      flex: 0.4,
      backgroundColor:'#fff',
      // height: 
      
  },
  touchBtn: {
    height: RFValue(50),
    margin:RFValue(10),
    marginBottom: RFValue(10),
    backgroundColor: 'lightgray',
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
})

export default GetStarted; 