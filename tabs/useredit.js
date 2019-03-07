import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, Dimensions } from 'react-native';
import SideHeader from '../components/sideheader'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DatePicker from 'react-native-datepicker'
import { Button } from 'native-base'
import { Actions } from 'react-native-router-flux'

class UserEdit extends Component {

    state = {
        name: '',
        birth: '',
        phone: '',
        email: '',
        job: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <SideHeader />
                <View style={styles.content}>
                    <ScrollView style={styles.wrapper}>
                        <Text style={styles.header}>User Detail</Text>
                        <FontAwesome style={{ marginTop: 15, alignSelf: 'center' }} name="user-circle" size={150} color="#13304F" />
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputHeader}>Name</Text>
                            <TextInput
                                autoCapitalize='none'
                                underlineColorAndroid='lightgrey'
                                value={this.state.name}
                                onChangeText={(text) => this.setState({ name: text })}
                                style={styles.input} />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputHeader}>Birthday</Text>
                            <DatePicker
                                style={styles.dateSelector}
                                date={this.state.birth}
                                mode="date"
                                placeholder="Select Date"
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => { this.setState({ birth: date }) }} />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputHeader}>Phone No.</Text>
                            <TextInput
                                autoCapitalize='none'
                                underlineColorAndroid='lightgrey'
                                keyboardType='number-pad'
                                value={this.state.phone}
                                onChangeText={(text) => this.setState({ phone: text })}
                                style={styles.input} />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputHeader}>E-mail</Text>
                            <TextInput
                                autoCapitalize='none'
                                underlineColorAndroid='lightgrey'
                                keyboardType='email-address'
                                value={this.state.email}
                                onChangeText={(text) => this.setState({ email: text })}
                                style={styles.input} />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputHeader}>Occupation</Text>
                            <TextInput
                                autoCapitalize='none'
                                underlineColorAndroid='lightgrey'
                                value={this.state.job}
                                onChangeText={(text) => this.setState({ job: text })}
                                style={styles.input} />
                        </View>
                        <View style={styles.buttonGroup}>
                            <Button style={styles.saveButton} onPress={() => Actions.UserDetail()}>
                                <Text style={styles.buttonText}>Save</Text>
                            </Button>
                            <Button style={styles.cancelButton} onPress={() => Actions.UserDetail()}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }

}

export default UserEdit

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
    inputWrapper: {
        marginTop: 15,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    inputHeader: {
        fontSize: 22,
        color: '#13304F'
    },
    input: {
        marginTop: 5,
        width: '100%',
        fontSize: 18,
        height: 30,
        borderWidth: 1.5,
        borderRadius: 2,
        borderColor: '#9AABB4'
    },
    dateSelector: {
        marginTop: 5,
        marginBottom: 20,
        width: '100%',
        fontSize: 18,
        height: 18,
    },
    buttonGroup: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'center'
    },
    saveButton: {
        width: 100,
        height: 40,
        borderColor: '#228B22',
        borderWidth: 1.5,
        borderRadius: 2.5,
        backgroundColor: '#32CD32',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButton: {
        width: 100,
        height: 40,
        borderColor: '#8B0000',
        borderWidth: 1.5,
        borderRadius: 2.5,
        backgroundColor: '#DC143C',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    }
})