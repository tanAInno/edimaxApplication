import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, TextInput, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import FirstPageHeader from '../components/firstpageheader'

class Register extends Component {

    render() {
        return(
            <View style={styles.container}>
                <FirstPageHeader />
                <Text style={styles.headerText}>Register</Text>
                <Text style={styles.headerName}>Username</Text>
                <TextInput style={styles.input} autoCapitalize='none'/>
                <Text style={styles.headerName}>Password</Text>
                <TextInput style={styles.input} autoCapitalize='none' secureTextEntry={true}/>
                <Text style={styles.headerName}>Name</Text>
                <TextInput style={styles.input} autoCapitalize='none'/>
                <Text style={styles.headerName}>E-mail</Text>
                <TextInput style={styles.input} autoCapitalize='none' textContentType='emailAddress'/>
                <Text style={styles.headerName}>Phone No.</Text>
                <TextInput style={styles.input} autoCapitalize='none' textContentType='telephoneNumber'/>
                <View style= {styles.buttonGroup}>
                    <Button style={styles.regisButton} onPress={() => Actions.Login()}>
                        <Text style={styles.buttonText}>Register</Text>
                    </Button>
                    <Button style={styles.cancelButton} onPress={() => Actions.Login()}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </Button>
                </View>
            </View>
        )
    }

}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "white",
    },
    headerText: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 30,
        color: '#13304F',
        alignSelf: 'center'
    },
    headerName: {
        marginLeft: '7.5%',
        marginTop: 10,
        fontSize: 24,
        color: '#13304F',
    },
    input: {
        marginTop: 10,
        width: '85%',
        height: 30,
        fontSize: 20,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#13304F',
        borderRadius: 5
    },
    buttonGroup: {
        marginTop: 35,
        flexDirection: 'row',
        width: '70%',
        alignSelf: 'center'
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
    cancelButton: {
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