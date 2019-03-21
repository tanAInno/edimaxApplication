import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, TextInput, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class Login extends Component {

    state = {
        user: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logoImage} source={require('../images/logo.png')} />
                <Text style={styles.headerText}>Login</Text>
                <View style={styles.loginBox}>
                    <Text style={styles.loginText}>Username</Text>
                    <TextInput style={styles.loginInput}
                        autoCapitalize='none' />
                    <Text style={styles.loginText}>Password</Text>
                    <TextInput style={styles.loginInput}
                        autoCapitalize='none'
                        secureTextEntry={true} />
                </View>
                <View style= {styles.buttonGroup}>
                    <Button style={styles.regisButton} onPress={() => Actions.Register()}>
                        <Text style={styles.buttonText}>Register</Text>
                    </Button>
                    <Button style={styles.loginButton} onPress={() => Actions.MainScreen()}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                </View>
            </View>
        )
    }

}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "white",
        alignItems: 'center'
    },
    headerText: {
        marginTop: 20,
        fontSize: 30,
        color: '#13304F'
    },
    logoImage: {
        marginTop: 100,
        width: 200,
        height: 230,
    },
    loginBox: {
        width: '90%',
        marginTop: 20
    },
    loginText: {
        marginTop: 10,
        fontSize: 20,
        color: '#13304F'
    },
    loginInput: {
        marginTop: 10,
        fontSize: 20,
        borderWidth: 1.5,
        borderColor: '#9AABB4',
        borderRadius: 5,
        height: 33,
    },
    fbLogin: {
        marginTop: 15,
        width: '85%',
        height: 30
    },
    buttonGroup: {
        marginTop: 35,
        flexDirection: 'row',
        width: '70%',
    },
    regisButton: {
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#13304F',
        width: '47.5%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButton: {
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#13304F',
        width: '47.5%',
        marginLeft: '5%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#13304F',
        fontSize: 20,
    }
})