import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Left, Button, Right } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import ToggleSwitch from 'toggle-switch-react-native'
import { setService } from '../actions/service'

class ServiceTab extends Component {

    state = {
        AirisOn: false,
        AirMaskisOn: false,
        CleanbedisOn: false,
        MeasureisOn: false,
    }

    componentDidMount(){
        this.props.setService([])
    }

    addService(isOn, value) {
        console.log(value)
        const services = this.props.service
        if (isOn)
            services.push(value)
        else
            services.splice(services.indexOf(value), 1)
        this.props.setService(services)
        console.log(services)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Service</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.textHeader}>รายการ Service</Text>
                    </View>
                    <View style={styles.tableItem}>
                        <Left>
                            <Text style={styles.textItem}>ล้างแอร์</Text>
                        </Left>
                        <Right style={{ marginRight: 10 }}>
                            <ToggleSwitch
                                isOn={this.state.AirisOn}
                                onColor='#7FD0DA'
                                offColor='#9AABB4'
                                onToggle={(isOn) => this.setState({ AirisOn: isOn },
                                    () => this.addService(this.state.AirisOn, 'ล้างแอร์'))}
                            />
                        </Right>
                    </View>
                    <View style={styles.tableItem}>
                        <Left>
                            <Text style={styles.textItem}>กำจัดไรฝุ่น</Text>
                        </Left>
                        <Right style={{ marginRight: 10 }}>
                            <ToggleSwitch
                                isOn={this.state.CleanbedisOn}
                                onColor='#7FD0DA'
                                offColor='#9AABB4'
                                onToggle={(isOn) => this.setState({ CleanbedisOn: isOn },
                                    () => this.addService(this.state.CleanbedisOn, 'กำจัดไรฝุ่น'))}
                            />
                        </Right>
                    </View>
                    <View style={styles.tableItem}>
                        <Text style={styles.textItem}>ตรวจวัดคุณภาพอากาศ</Text>
                        <Right style={{ marginRight: 10 }}>
                            <ToggleSwitch
                                isOn={this.state.MeasureisOn}
                                onColor='#7FD0DA'
                                offColor='#9AABB4'
                                onToggle={(isOn) => this.setState({ MeasureisOn: isOn },
                                    () => this.addService(this.state.MeasureisOn, 'ตรวจวัดคุณภาพอากาศ'))}
                            />
                        </Right>
                    </View>
                    <View style={styles.tableItem}>
                        <Left>
                            <Text style={styles.textItem}>ติดตั้ง Airmask</Text>
                        </Left>
                        <Right style={{ marginRight: 10 }}>
                            <ToggleSwitch
                                isOn={this.state.AirMaskisOn}
                                onColor='#7FD0DA'
                                offColor='#9AABB4'
                                onToggle={(isOn) => this.setState({ AirMaskisOn: isOn },
                                    () => this.addService(this.state.AirMaskisOn, 'ติดตั้ง Airmask'))}
                            />
                        </Right>
                    </View>
                    <Button style={styles.itemButton} onPress={() => Actions.CallService()}>
                        <Text style={styles.buttonText}>จอง</Text>
                    </Button>
                </View>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    service: state.serviceReducer.service
})

const mapDispatchToProps = dispatch => ({
    setService: (service) => {
        dispatch(setService(service))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ServiceTab)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "#EFEFEF",
    },
    header: {
        marginTop: 15,
        alignSelf: 'center',
        fontSize: 24,
        color: '#13304F'
    },
    tableContainer: {
        marginTop: 15,
        width: '85%',
        borderWidth: 1.5,
        borderColor: '#9AABB4',
        borderRadius: 1,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    tableHeader: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7FD0DA',
        borderBottomWidth: 1,
        borderColor: '#9AABB4',
    },
    textHeader: {
        fontSize: 18,
        color: '#13304F'
    },
    tableItem: {
        width: '100%',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: '#9AABB4',
    },
    textItem: {
        width: '70%',
        marginLeft: 10,
        fontSize: 16,
        color: '#13304F',
    },
    itemButton: {
        marginTop: 15,
        marginBottom: 15,
        width: '35%',
        height: 35,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#13304F',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#b3c0e3'
    },
    buttonText: {
        fontSize: 15,
        color: 'white'
    }
})