import React from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { MealImg } from '../assets/index'


function FoodMeals({navigation}){
    
    return(
        <View style={styles.Main}>
            <View style={styles.MainHeaderConatiner}>
                <Image style={styles.imgStyle} source={MealImg}></Image>
            </View>
            <View style={styles.MainFotterConatiner}>
                <View style={styles.fotterContentContainer}>
                    <Text style={styles.FotterTittle}>Happy Meals</Text>
                    <Text style={styles.fotterText}>
                    For more information, visit www.meals.gov/summerfoodrocks or call 609-292-4498. 
                    The Summer Food Service Program ensures children from low-income areas receive nutritious meals, including milk
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('GetStarted')}>
                        <View style={styles.btnContainer}> 
                            <Text style={styles.btnText}>Get Started</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Main:{
        height: '100%',
        backgroundColor: '#fff',
        navBarHidden: true,
        orientation: 'potrait',
        statusBarColor: '#FF6B6B',
        statusBarTextColorScheme: '#fff',
    },
    MainHeaderConatiner:{
        flex: 2,
        paddingHorizontal:20,
        justifyContent:'center'
    },
    imgStyle:{
        height: 320,
        width:320
    },
    MainFotterConatiner:{
        flex: 1.2,
        backgroundColor: '#FF6B6B',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    fotterContentContainer:{
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10
    },
    FotterTittle:{
        fontSize: RFValue(30),
        fontWeight: '700',
        letterSpacing: 2,
        // lineHeight: 40
        color:'#fff'
    },
    fotterText:{
        paddingTop: 10,
        // paddingRight:10,
        fontSize: 13,
        alignSelf: 'center',
        paddingBottom: 20,
        color: '#fff'
    },
    btnContainer:{
        backgroundColor: '#fff',
        alignSelf: 'baseline',
        paddingHorizontal: 20,
        height: 40,
        justifyContent:'center',
        borderRadius: 20
    },
    btnText:{
        color: '#FF6B6B',
        fontSize: RFValue(18),
        paddingHorizontal: 10,
        fontWeight: '500'
    }
})

export default FoodMeals