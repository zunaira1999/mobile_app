//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../../../../shared/theme/FontColor';
import Touch from '../../../../../shared/components/Button/Touch';
import Icon from 'react-native-vector-icons/Entypo'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// create a component
const CheckOut = ({navigation}) => {
    return (

        <View style={styles.container}>
            <KeyboardAwareScrollView extraHeight={50}>

                <View style={[colors.textIconContainer, styles.HeadContent]}>
                    <View >
                        <Text style={[colors.FonSize, styles.textContainer]}>
                            Delivery Address
                        </Text>
                        <Text style={[colors.FonSize, styles.textContainer]}>
                            123 Youk SitBoookly,Ny 11201, USA
                        </Text>

                    </View>
                    <TouchableOpacity>
                        <Text style={[colors.color, { fontSize: RFValue(16) }]}>
                            Change
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fotterPayment}>
                    <View style={colors.textIconContainer}>
                        <Text style={[colors.FonSize, { fontWeight: 'bold' }]}>
                            Payment Method
                        </Text>
                        <TouchableOpacity>
                            <Text style={[colors.FonSize, colors.color,{fontSize:RFValue(16)}]}>
                                Add <Icon name='plus' size={20} color="#FF6B6B" />
                            </Text>
                        </TouchableOpacity>

                    </View>
                    {/* <KeyboardAwareScrollView extraHeight={10}> */}
                    <View style={styles.paymentContainer}>
                        <View style={styles.InputIcon}>
                            <FontAwesome5Brands style={{ paddingTop: RFValue(10) }} name='cc-visa' size={25} color={'lightgray'} />
                            <TextInput placeholderTextColor={'lightgray'} placeholder='Enter Your Account Number' secureTextEntry={true} style={styles.inputText} />
                        </View>
                        <View style={styles.InputIcon}>
                            <FontAwesome5Brands style={{ paddingTop: RFValue(10) }} name='paypal' size={25} color={'#FF6B6B'} />
                            <TextInput placeholderTextColor={'lightgray'} placeholder='Bank Nme' style={styles.inputText} />
                        </View>
                    </View>
                    {/* </KeyboardAwareScrollView> */}

                </View>
                
                    <View style={styles.fotterCoupon}>
                        <Text style={colors.FonSize}>
                            Enter Coupon
                        </Text>
                        <Text style={colors.color}>
                            Hungry10
                        </Text>
                    </View>
                    <View style={styles.fotterSummary}>
                        <Text style={styles.tittleSummary}>
                            Summary
                        </Text>
                        <View style={colors.textIconContainer}>
                            <View >
                                <Text style={colors.FonSize}>
                                    SubTotal
                                </Text>
                            </View>
                            <View >
                                <Text style={[colors.FonSize,{fontWeight:'bold'}]}>
                                    $64
                                </Text>
                            </View>

                        </View>
                        <View style={colors.textIconContainer}>
                            <View >
                                <Text style={colors.FonSize}>
                                    Delivery Cost
                                </Text>
                            </View>
                            <View >
                                <Text style={[colors.FonSize,{fontWeight:'bold'}]}>
                                    Free
                                </Text>
                            </View>

                        </View>
                        <View style={colors.textIconContainer}>
                            <View >
                                <Text style={colors.FonSize}>
                                    Discount
                                </Text>
                            </View>
                            <View >
                                <Text style={[colors.FonSize,,{fontWeight:'bold'}]}>
                                    $6.4
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={[colors.textIconContainer,styles.totalContainerText]}>
                            <View >
                                <Text style={[colors.FonSize,colors.color]}>
                                    Total
                                </Text>
                            </View>
                            <View >
                                <Text style={[colors.FonSize,colors.color]}>
                                    $6.4
                                </Text>
                            </View>
                        </View>
                    <Touch tittle='Send Order' onPress={()=>navigation.navigate('TrackYourOrder')} />
                
            </KeyboardAwareScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: RFValue(500),
        padding: RFValue(10),
        backgroundColor: '#fff',
    },
    HeadContent: {
        flex: 0.15,
        // backgroundColor: 'red',
        padding: RFValue(10),
        borderBottomWidth: RFValue(1),
        borderBottomColor: 'lightgray'
    },
    textContainer: {
        paddingVertical: RFValue(10)
    },
    fotterPayment: {
        flex: 0.4,

    },
    InputIcon: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: RFValue(8),
        marginTop: RFValue(20),
        marginHorizontal: RFValue(20),
        marginBottom: RFValue(10),
        borderRadius: RFValue(20),
        borderColor: 'lightgray'
    },
    inputText: {
        // borderWidth: 1,
        width: '90%',
        fontSize: RFValue(15),
        color: 'gray',
        paddingHorizontal: RFValue(10)
    },
    fotterCoupon: {
        flex: 0.14,
        // backgroundColor: 'purple',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: RFValue(20),
        paddingVertical: RFValue(10),
        borderBottomWidth: RFValue(1),
        borderBottomColor: 'lightgray',
        elevation: 1,
        marginBottom: RFValue(10)
    },
    fotterSummary: {
        flex: 0.4,
        // backgroundColor: 'blue'
        borderBottomWidth: RFValue(1),
        paddingHorizontal:RFValue(10),
        paddingVertical:RFValue(10),
        borderBottomColor:'lightgray'
    },
    tittleSummary: {
        color: 'black',
        fontSize: RFValue(22),
        fontWeight: 'bold'
    },
    summaryContent: {
        paddingHorizontal: RFValue(10),
        borderBottomWidth: RFValue(1)
    },
    totalContainerText:{
        paddingHorizontal:RFValue(10),
        paddingVertical:RFValue(10)
    }
});

//make this component available to the app
export default CheckOut;
