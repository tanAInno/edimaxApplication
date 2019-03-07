import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, Dimensions } from 'react-native';
import SideHeader from '../components/sideheader'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DatePicker from 'react-native-datepicker'
import { Button } from 'native-base'
import { Actions } from 'react-native-router-flux'

class UserDetail extends Component {

    render(){
        return(
            <View style={styles.container}>
                <SideHeader />
                <View style={styles.content}>
                    <ScrollView style={styles.wrapper}>
                        <Text style={styles.header}>User Detail</Text>
                        <FontAwesome style={{ marginTop: 15, alignSelf: 'center' }} name="user-circle" size={150} color="#13304F" />
                        <Text style={styles.detailHeader}>Name : </Text>
                        <Text style={styles.detailHeader}>Birthday : </Text>
                        <Text style={styles.detailHeader}>Phone No. : </Text>
                        <Text style={styles.detailHeader}>E-mail : </Text>
                        <Text style={styles.detailHeader}>Occupation : </Text>
                        <Button style={styles.editButton} onPress={() => Actions.UserEdit()}>
                            <Text style={styles.buttonText}>Edit</Text>
                        </Button>
                    </ScrollView>
                </View>
            </View>
        )
    }

}

export default UserDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "white",
    },
    content: {
        flexDirection: 'column',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    wrapper: {
        width: '100%',
    },
    header: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#13304F'
    },
    detailHeader: {
        marginTop: 20,
        fontSize: 22,
        color: '#13304F'
    },
    editButton: {
        marginTop: 30,
        width: 100,
        height: 40,
        borderColor: '#d48000',
        borderWidth: 1.5,
        borderRadius: 2.5,
        backgroundColor: '#ffce00',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#13304F',
    }
})