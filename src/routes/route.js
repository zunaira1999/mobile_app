//import liraries
import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Auth from './stacks/auth';

// create a component
const Routes = () => {
    return (
        <SafeAreaProvider>
            <Auth />
            
        </SafeAreaProvider>
    );
};

export default Routes;
