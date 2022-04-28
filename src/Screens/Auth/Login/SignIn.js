
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../../shared/theme/FontColor';
import Touch from '../../../shared/components/Button/Touch';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './SignInStyle/SignInStyle';

    const isValidObjectField=(obj)=>{
        return Object.values(obj).every(value =>value.trim())
    }
    const updateError=(error,setUpdater)=>{
        setUpdater(error);
        setTimeout(()=>{
            setUpdater('')
        },2500)
    }
    const isValidEmial=(value)=>{
        const regx= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return regx.test(value)
    }

const SignIn = ({navigation}) => {
    const [userName,setUserName] =useState('')
    const [userInfo,setUserInfo] = useState({
        fullName: '',
        email:'',
        password: '',
        confirmPassword:''
    })
    const [error,setError]=useState('')
    const {fullName,email,password,confirmPassword} = userInfo
    const handleChangeText=(value,fieldName)=>{
        setUserInfo({...userInfo,[fieldName]: value})
    }
    const isValidForm=()=>{
        // we will accept only when all of the fields have value
        if(!isValidObjectField(userInfo)) return updateError('Required All Fields!',setError )
        // if valid name with 3 or more characters
        if(!fullName.trim() || fullName.length < 3) return  updateError('Invalid name!',setError )
        // only valid email is allowed
        if(!isValidEmial(email)) return  updateError('Invalid email!',setError )

        //password must have 8character or more
        if(!password.trim() || password.length < 8) return  updateError('Password is less than 8 character!',setError )
        
    }
    const submitForm=()=>{
        
        
        navigation.navigate("Home", { myName : `${fullName}`})
        
    }
    
    return (
        <View style={styles.MAincontainer}>
            <KeyboardAwareScrollView>
                <View style={styles.contentContainer}>
                    <Text style={[colors.color, styles.tittle]}>SignIn To Your Account</Text>
                    {error ? <Text style={{color: 'red',fontSize: RFValue(18),textAlign:'center'}}>{error} </Text> : null}
                    <View style={styles.iconInputStyle}>
                    <Fontisto style={styles.iconMainStyle} name='email' color={'#FF6B6B'} size={20} />
                    <TextInput autoCapitalize='none'
                     value={fullName} 
                    // value={userName} 
                     onChangeText={(value)=>handleChangeText(value,'fullName')} 
                    
                     placeholderTextColor={'gray'} placeholder='Email' style={styles.inputText} />
                    </View>
                    <View style={styles.iconInputStyle}>
                    <Feather style={styles.iconMainStyle} name='lock' color={'#FF6B6B'} size={20} />
                    <TextInput autoCapitalize='none' value={password} onChangeText={(value)=>handleChangeText(value,'password')} placeholderTextColor={'gray'} secureTextEntry={true} placeholder='Password' style={styles.inputText} />
                    </View>
                    
                <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}>
                    <Text style={[colors.color,styles.forgetPassword]}>
                        Forget Password?
                    </Text>
                </TouchableOpacity>
                <Touch  tittle='Login' onPress={submitForm} />
                
                </View>
            </KeyboardAwareScrollView>
            <View style={styles.bottomText}>
                <Text style={styles.text}>
                    Don't Have An Account
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text style={[colors.color,{fontSize: RFValue(18)}]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default SignIn;
