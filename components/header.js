import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { Left, Body, Center, Right, Header, Thumbnail } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import { Actions } from 'react-native-router-flux'

class AppHeader extends Component {

    render() {
        return (
            <Header style={styles.header}>
                <Left style={{flex: 1, marginTop: 5}}>
                    <Entypo name="menu" size={35} color="#13304F"/>
                </Left>
                <Body style={styles.headerBody}>
                    <Image style={styles.thumbnailImage} source={require('../images/logo.png')} />
                    <Text style={styles.thumbnailText}>Innocare</Text>
                </Body>
                <Right style={{flex: 1, alignItems:'center'}}>
                    <TouchableOpacity style={{ minWidth: 35, minHeight: 35, justifyContent: 'center' ,marginRight: 5}} onPress={() => Actions.Shopping()}>
                        <FontAwesome name="shopping-cart" size={30} color="#13304F" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ minWidth: 35, minHeight: 35, justifyContent: 'center' }} onPress={() => Actions.UserDetail()}>
                        <FontAwesome name="user-circle" size={30} color="#13304F" />
                    </TouchableOpacity>
                </Right>
            </Header>
        )
    }

}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white'
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