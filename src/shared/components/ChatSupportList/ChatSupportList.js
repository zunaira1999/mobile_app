//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image,FlatList,SafeAreaView,ScrollView} from 'react-native';
import { styles } from './ChatSupportStyles';
import { live_chat } from '../../../assets';
import { colors } from '../../theme/FontColor';
import Touch from '../Button/Touch'
import Icon from 'react-native-vector-icons/AntDesign'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

// create a component
const ChatSupportList = ({navigation,onPress}) => {
    const chatFlatList = [
        {
            tittle: 'Frequently Asked Questions',
            chatCategory: 'My Order did not delivered',
            paymentTittle: 'Payment Methods',
            paymentDetail: 'How do I change payment method',
            icon : <Icon name='right' size={18} color={'gray'} /> 
        },
        {
            chatCategory: 'My order came with missing item',
            paymentDetail: 'can i returned my order?',
            icon : <Icon name='right' size={18} color={'gray'} /> 
        },
        {
            chatCategory: 'Change My Delivery Address',
            paymentDetail: 'How do I change payment method',
            icon : <Icon name='right' size={18} color={'gray'} /> 
        }
        ,{
            chatCategory: 'My order came with missing item',
            paymentDetail: 'How do I change payment method',
            icon : <Icon name='right' size={18} color={'gray'} /> 
        },
        {
            chatCategory: 'Change my number',
            chatCategory3: 'Change My Delivery Address',
            paymentDetail: 'can i returned my order?',
            icon : <Icon name='right' size={18} color={'gray'} /> 
        },
        
    ]
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.cardLiveChat}>
                    <View style={colors.textIconContainer}>
                        <View>
                            <Text style={[colors.color,styles.tittleChat]}>Live Chat With our support</Text>
                            <Touch tittle='Start' onPress={onPress} />
                        </View>
                        <Image style={styles.ChatImag} source={live_chat} />
                    </View>
                </View>
                <SafeAreaView>
                    <ScrollView>
                    <View style={styles.cardFlatListChat}>
                    <FlatList 
                    data={chatFlatList}
                    renderItem= {(elements)=>{
                            return(
                                <>
                                <View style={{height:RFPercentage(11)}}>
                                    <Text style={[colors.FonSize,{fontWeight:'bold'}]}>
                                        {elements.item.tittle}
                                    </Text>
                                    <View>
                                    <TouchableOpacity>
                                        <View style={[colors.textIconContainer, styles.catogryFlatlist ]}>
                                            <Text style={[colors.color,{fontSize:RFValue(15)}]}>
                                                {elements.item.chatCategory}
                                            </Text>
                                            {elements.item.icon}
                                        </View>
                                        
                                    </TouchableOpacity>
                                    
                                    </View>
                                </View>
                                </>
                            )
                    }}  
                    />
                </View>
                <View style={styles.cardFlatListChat}>
                <FlatList 
                    data={chatFlatList}
                    renderItem= {(elements)=>{
                            return(
                                <>
                                
                                    
                                    <View style={{height:RFPercentage(11)}}> 
                                    <Text style={[colors.FonSize,{fontWeight:'bold'}]}>
                                        {elements.item.paymentTittle}
                                    </Text>
                                    <TouchableOpacity>
                                        
                                        <View style={[colors.textIconContainer, styles.catogryFlatlist ]}>
                                            <Text style={[colors.color,{fontSize:RFValue(15)}]}>
                                                {elements.item.paymentDetail}
                                            </Text>
                                            {elements.item.icon}
                                        </View>
                                    </TouchableOpacity>
                                     </View>
                                    
                                
                                </>
                            )
                    }}  
                    />
                </View>
                    </ScrollView>
               
                </SafeAreaView>
                
            </View>
        </View>
    );
};


export default ChatSupportList;
