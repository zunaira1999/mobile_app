
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FoodMeals from '../../Screens/FoodMeal';
import GetStarted from '../../Screens/GetStarted';
import CreateAccount from '../../Screens/Auth/SignUp/CreateAccount';
import SignIn from '../../Screens/Auth/Login/SignIn';
import ForgetPassword from '../../Screens/Auth/ForgetPassword/ForgetPassword';
import BottomTab from './tabs';
import ExploreMore from '../../Screens/Intro/TabsInnerScreens/ExploreMore/ExploreMore';
import TrackOrder from '../../Screens/Intro/TabsInnerScreens/ExploreMore/TrackOrder';
import OrderDetail from '../../Screens/Intro/TabsInnerScreens/ExploreMore/OrderDetail/OrderDetail';
import OrderCart from '../../Screens/Intro/TabsInnerScreens/ExploreMore/CartOrder';
import Chat from '../../Screens/Intro/TabsInnerScreens/ExploreMore/Chat';
import CheckOut from '../../Screens/Intro/TabsInnerScreens/ExploreMore/OrderDetail/CheckOut';
import LiveChat from '../../Screens/Intro/TabsInnerScreens/ExploreMore/LiveChat/LiveChat';
const Stack = createNativeStackNavigator()
const Auth = () => {
    return (<>


        <StatusBar
            barStyle='dark-content'
            translucent
            backgroundColor={'transparent'}
            
        />
        <Stack.Navigator>
            <Stack.Screen name='Meal' options={{
                headerShown: false
            }} component={FoodMeals} />
            <Stack.Screen name='GetStarted' options={{
                headerShown: false
            }} component={GetStarted} />
            <Stack.Screen name='Login' options={{
                headerShown: false
            }} component={SignIn} />
            <Stack.Screen name='Signup' options={{
                headerShown: false
            }} component={CreateAccount} />
            <Stack.Screen name='ForgetPassword' options={{
                headerShown: false
            }} component={ForgetPassword} />
            <Stack.Screen name='Home' options={{
                headerShown: false
            }} component={BottomTab} />
            <Stack.Screen options={{
                headerShown: false
            }} name='ExploreMore' component={ExploreMore} />

            <Stack.Screen  name='TrackYourOrder' component={TrackOrder} />
            <Stack.Screen  name='OrderDetail' component={OrderDetail} />
            <Stack.Screen  name='PlaceOder' component={OrderCart} />
            <Stack.Screen  name='Support' component={Chat} />
            <Stack.Screen  name='CheckOut' component={CheckOut} />
            <Stack.Screen  name='LiveChat' component={LiveChat} />
        </Stack.Navigator>


    </>
    );
};
export default Auth;
