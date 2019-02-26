import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text, Dimensions, View } from 'react-native';
import { Tab, Tabs } from 'native-base';
import axios from 'react-native-axios';
import { connect } from 'react-redux';
import { setDevices } from '../actions/monitor';

class MonitorTab extends Component {

    componentDidMount() {
        this.getEdimaxData()
    }

    async getEdimaxData() {
        await axios.get("https://airbox.edimaxcloud.com/devices?token=9af3944d-5ffa-4650-8e6a-dd7e665e0cf7")
            .then(response => {
                console.log(response.data.devices)
                const devices = response.data.devices
                this.props.setDevices(devices)
            }).catch(error => console.log(error))
    }

    renderTabs() {
        if (this.props.edimaxdata.length != 0) {
            return (
                <Tabs initialPage={0}>
                    {this.props.edimaxdata.map((data, index) => {
                        return (
                            <Tab textStyle={styles.tabText}
                                activeTextStyle={styles.activeTabText}
                                tabStyle={styles.tabStyle}
                                activeTabStyle={styles.activeTabStyle}
                                heading={data.name}>
                                <View><Text>{data.name}</Text></View>
                            </Tab>
                        )
                    })}
                </Tabs>
            )
        }
        else {
            return (<View/>)
        }
    }

    render() {
        console.log(this.props.edimaxdata)
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}/>
                {this.renderTabs()}
            </ScrollView>
        )
    }

}

const mapStateToProps = state => ({
    edimaxdata: state.monitorReducer.devices
})

const mapDispatchToProps = dispatch => ({
    setDevices: (devices) => {
        dispatch(setDevices(devices))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(MonitorTab)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    header: {
        width: '100%',
        height: '80%',
        backgroundColor: '#9AABB4'
    },
    tabText: {
        color: '#13304F',
        fontSize: 10,
        fontWeight: '500'
    },
    activeTabText: {
        color: '#13304F',
        fontSize: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    tabStyle: {
        backgroundColor: '#9AABB4'
    },
    activeTabStyle: {
        backgroundColor: '#9AABB4'
    }
})
