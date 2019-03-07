import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base'
import { connect } from 'react-redux'
import SideHeader from '../components/sideheader'
import DatePicker from 'react-native-datepicker'
import { Actions } from 'react-native-router-flux'

class CallService extends Component {

    state = {
        datetime: '',
        addr1: '',
        addr2: '',
        room: '',
        airDetail: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <SideHeader />
                <Text style={styles.headerText}>จอง Service ล้างแอร์</Text>
                <Text style={styles.headerText}>({this.props.service})</Text>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>กำหนดวันนัดหมาย</Text>
                    <DatePicker
                        style={styles.dateSelector}
                        date={this.state.datetime}
                        mode="datetime"
                        placeholder="Select Date-Time"
                        format="วันที่ DD/MM/YYYY เวลา hh:mm:00 a"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => { this.setState({ datetime: date }) }} />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>ที่อยู่ (บรรทัดที่ 1)</Text>
                    <TextInput
                        autoCapitalize='none'
                        underlineColorAndroid='lightgrey'
                        value={this.state.addr1}
                        onChangeText={(text) => this.setState({ addr1: text })}
                        style={styles.input} />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>ที่อยู่ (บรรทัดที่ 2)</Text>
                    <TextInput
                        autoCapitalize='none'
                        underlineColorAndroid='lightgrey'
                        value={this.state.addr1}
                        onChangeText={(text) => this.setState({ addr2: text })}
                        style={styles.input} />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>ห้องที่ติดตั้งแอร์</Text>
                    <TextInput
                        autoCapitalize='none'
                        underlineColorAndroid='lightgrey'
                        value={this.state.room}
                        onChangeText={(text) => this.setState({ room: text })}
                        style={styles.input} />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>ข้อมูลแอร์เบื้องต้น</Text>
                    <TextInput
                        autoCapitalize='none'
                        underlineColorAndroid='lightgrey'
                        value={this.state.airDetail}
                        placeholder='ex.ชนิด, ยี่ห้อ, ค่า BTU ..'
                        onChangeText={(text) => this.setState({ airDetail: text })}
                        style={styles.input} />
                </View>
                <View style={styles.buttonGroup}>
                    <Button style={styles.saveButton} onPress={() => Actions.MainScreen()}>
                        <Text style={styles.buttonText}>Save</Text>
                    </Button>
                    <Button style={styles.cancelButton} onPress={() => Actions.MainScreen()}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </Button>
                </View>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    service: state.serviceReducer.service
})

export default connect(mapStateToProps, null)(CallService)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white'
    },
    headerText: {
        marginTop: 15,
        alignSelf: 'center',
        fontSize: 20,
        color: '#13304F'
    },
    inputView: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 15
    },
    inputText: {
        fontSize: 18,
        color: '#13304F'
    },
    dateSelector: {
        marginTop: 5,
        marginBottom: 20,
        width: '100%',
        fontSize: 18,
        height: 18,
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
    buttonGroup: {
        flexDirection: 'row',
        marginTop: 25,
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