import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Left, Body, Right, Header } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'

class FirstPageHeader extends Component {

    render() {
        return (
            <Header style={styles.header}>
                <Left>
                    <TouchableOpacity style={styles.backArrow} onPress={() => Actions.Login()}>
                        <Ionicons name="ios-arrow-back" size={30} color="#13304F" />
                    </TouchableOpacity>
                </Left>
                <Body style={styles.headerBody}>
                    <Image style={styles.thumbnailImage} source={require('../images/logo.png')} />
                    <Text style={styles.thumbnailText}>Innocare</Text>
                </Body>
                <Right></Right>
            </Header>
        )
    }

}

export default FirstPageHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white'
    },
    backArrow: { 
        minWidth: 35, 
        minHeight: 35, 
        justifyContent: 'center',
        marginLeft: '5%' 
    },
    headerBody: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    thumbnailImage: {
        width: 30,
        height: 30,
    },
    thumbnailText: {
        marginLeft: 5,
        fontSize: 18,
        color: '#13304F'
    }
})
