//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity,SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../../shared/theme/FontColor';
import Touch from '../../../shared/components/Button/Touch';
import {KeyboardAwareScrollView, keyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './SignUpStyle/CreatAccountStyle';

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
function CreateAccount({navigation}) {
    
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
        if(!isValidObjectField(userInfo)){
            return updateError('Required All Fields!',setError )
        }

        // if valid name with 3 or more characters
        if(!fullName.trim() || fullName.length < 3) return  updateError('Invalid name!',setError )
        // only valid email is allowed
        if(!isValidEmial(email)) return  updateError('Invalid email!',setError )

        //password must have 8character or more
        if(!password.trim() || password.length < 8) return  updateError('Password is less than 8 character!',setError )
        //password and confirm password must be same
        if(password !== confirmPassword) return  updateError('Password does not match!',setError )
    }
    const submitForm=()=>{
        if(isValidForm()){
            console.log(userInfo)
        }
        navigation.navigate("Home")
    }
    return (
        <SafeAreaView>
            <View style={styles.Maincontainer}>
                <KeyboardAwareScrollView  extraHeight={100}>
            <View style={styles.contentContainer}>
                <Text style={[styles.headTittle,colors.color]}>Create Your Account</Text>
                <View style={styles.inputTextContainer}>
                {error ? <Text style={{color: 'red',fontSize: RFValue(18),textAlign:'center'}}>{error} </Text> : null}
                <View style={styles.iconInputStyle}>
                    <Feather style={styles.iconMainStyle} name='user' color={'#FF6B6B'} size={20} />
                    <TextInput placeholderTextColor={'gray'} value={fullName} onChangeText={(value)=>handleChangeText(value,'fullName')}  placeholder='User Name' style={styles.inputText} />
                </View>
                <View style={styles.iconInputStyle}>
                    <Fontisto style={styles.iconMainStyle} name='email' color={'#FF6B6B'} size={20} />
                    <TextInput placeholderTextColor={'gray'} value={email} onChangeText={(value)=>handleChangeText(value,'email')} placeholder='Email' style={styles.inputText} />
                </View>
                <View style={styles.iconInputStyle}>
                    <Feather style={styles.iconMainStyle} name='lock' color={'#FF6B6B'} size={20} />
                    <TextInput placeholderTextColor={'gray'} value={password} onChangeText={(value)=>handleChangeText(value,'password')} secureTextEntry={true} placeholder='Password' style={styles.inputText} />
                </View>
                <View style={styles.iconInputStyle}>
                    <Feather style={styles.iconMainStyle} name='lock' color={'#FF6B6B'} size={20} />
                    <TextInput placeholderTextColor={'gray'} value={confirmPassword} onChangeText={(value)=>handleChangeText(value,'confirmPassword')} secureTextEntry={true} placeholder='Confirm Password' style={styles.inputText} />
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <View style={styles.btnMain}>
                        <Text style={styles.btn_Text}>Already have an account?</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
                <Touch onPress={submitForm} tittle='Submit' />
               
                <Text style={styles.accountInfo}>
                When you create a Google Account, we ask for some personal info.
                By providing accurate info, you can help keep your account secure and make our services more useful.
                </Text>
        </KeyboardAwareScrollView>
                </View>
                </SafeAreaView>
    );
};

// define your styles


export default CreateAccount;
