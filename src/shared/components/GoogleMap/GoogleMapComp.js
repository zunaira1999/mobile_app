//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Map,GoogleApiWrapper } from 'google-maps-react';

// create a component
// const GoogleMapComp extends Component{

// }
const GoogleMapComp = () => {
    return (
        <View style={styles.c}>
            <Map 
            // google={google}
            // style={styles.mapstyle}
            // zoom={10}
            // initialCenter={
            //     {
            //         lat :31.520370 ,
            //         lng:74.358749 
            //     }
            // }
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    mapstyle:{
        height:'100%',
        width:'100%'
    }
});

//make this component available to the app
// export default GoogleApiWrapper(
//     {
//         apiKey: 'AIzaSyADr7J-WJVGpMAgy5rAzbjfnGSLG_mThn0'
//     }
// )(GoogleMapComp)
