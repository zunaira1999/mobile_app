import React from 'react'
import {View ,Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import FoodMeals from './src/Screens/FoodMeal'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './src/Screens/GetStarted';
import Routes from './src/routes/route';
import { SafeAreaProvider } from 'react-native-safe-area-context';
function App(){
  const Stack = createNativeStackNavigator();
  return(
    <SafeAreaProvider>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App