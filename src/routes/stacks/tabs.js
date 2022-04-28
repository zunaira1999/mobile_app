//import liraries
import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../../Screens/Intro/Tabs/HomeTab/HomeTab';

import OutletTab from '../../Screens/Intro/Tabs/OutletTab/OutletTab';
import ProfileTab from '../../Screens/Intro/Tabs/ProfileTab/ProfileTab';
import ShopingTab from '../../Screens/Intro/Tabs/ShopingTab';
import Ionic from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <>
            
            <Tab.Navigator 
            screenOptions={({route})=>({
                tabBarIcon: ({focused,size,color})=>{
                    let iconName
                    if(route.name ==='home'){
                        iconName = focused ? 'ios-home' : 'ios-home-outline'
                        size = focused ? size + 8:size+ 5
                    }else if(route.name ==='outlet'){
                        iconName = focused ? 'ios-list' : 'ios-list-outline'
                        size = focused ? size + 8:size+ 5
                    }else if(route.name ==='profile'){
                        iconName = focused ? 'person-circle-sharp' : 'person-circle-outline'
                        size = focused ? size + 8:size+ 5
                    }
                    return <Ionic name={iconName} size={size} color={color} />
                }
            }
            
            )}
        tabBarOptions={{
            activeTintColor: '#FF1818',
            inactiveTintColor: '#FF6B6B',
            showLabel:false,
            style:{
                backgroundColor: 'blue',
                height: RFValue(60),
                
            },
        }}
            >
                <Tab.Screen options={{headerShown:false}} name='home' component={HomeTab} />
                <Tab.Screen options={{headerShown:false}} name='outlet' component={OutletTab} />
                <Tab.Screen options={{headerShown:false}} name='profile' component={ProfileTab} />
                {/* <Tab.Screen options={{headerShown:false}} name='ExploreMore' component={ExploreMore} /> */}
            </Tab.Navigator>
        </>
    );
};




export default BottomTab;
