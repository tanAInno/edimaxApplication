import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text, Dimensions, View } from 'react-native';
import { Tab, Tabs } from 'native-base';
import axios from 'react-native-axios';
import { connect } from 'react-redux';
import { setDevices } from '../actions/monitor';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

class MonitorTab extends Component {
    
    componentDidMount() {
        this.getEdimaxData()
        this._interval = setInterval(() => {
            this.getEdimaxData()
        }, 5000)
    }

    componentWillUnmount(){
        clearInterval(this._interval)
    }

    async getEdimaxData() {
        await axios.get("https://airbox.edimaxcloud.com/devices?token=9af3944d-5ffa-4650-8e6a-dd7e665e0cf7")
            .then(response => {
                console.log(response.data.devices)
                const devices = response.data.devices
                this.props.setDevices(devices)
            }).catch(error => console.log(error))
    }

    renderTempItem(header,data,low,high){
        if(data < high && data > low)
            return <Text style={styles.monitorHeaderGreen}>{header}</Text>
        if(data > high)
            return <Text style={styles.monitorHeaderRed}>{header}</Text>
        if(data < low)
            return <Text style={styles.monitorHeaderBlue}>{header}</Text>
    }

    renderTempText(data,low,high){
        if(data < high && data > low)
            return <Text style={styles.monitorTextGreen}>{data}</Text>
        if(data > high)
            return <Text style={styles.monitorTextRed}>{data}</Text>
        if(data < low)
            return <Text style={styles.monitorTextBlue}>{data}</Text>
    }

    renderHumItem(header,data,low,high){
        if(data < high && data > low)
            return <Text style={styles.monitorHeaderGreen}>{header}</Text>
        if(data > high)
            return <Text style={styles.monitorHeaderBlue}>{header}</Text>
        if(data < low)
            return <Text style={styles.monitorHeaderRed}>{header}</Text>
    }

    renderHumText(data,low,high){
        if(data < high && data > low)
            return <Text style={styles.monitorTextGreen}>{data}</Text>
        if(data > high)
            return <Text style={styles.monitorTextBlue}>{data}</Text>
        if(data < low)
            return <Text style={styles.monitorTextRed}>{data}</Text>
    }

    renderTempIcon(data,low,high,icon,iconsize){
        if(data < high && data > low)
            return <FontAwesome5 name={icon} size={iconsize} color="#228B22" />
        if(data > high)
            return <FontAwesome5 name={icon} size={iconsize} color="#B22222" />
        if(data < low)
            return <FontAwesome5 name={icon} size={iconsize} color="#00CED1" />
    }

    renderHumIcon(data,low,high,icon,iconsize){
        if(data < high && data > low)
            return <Entypo name={icon} size={iconsize} color="#228B22" />
        if(data > high)
            return <Entypo name={icon} size={iconsize} color="#00CED1" />
        if(data < low)
            return <Entypo name={icon} size={iconsize} color="#B22222" />
    }

    renderItemHeader(header,data,standard){
        if(data < standard)
            return <Text style={styles.monitorHeaderGreen}>{header}</Text>
        else
            return <Text style={styles.monitorHeaderRed}>{header}</Text>
    }

    renderItemText(data,standard){
        if(data < standard)
            return <Text style={styles.monitorTextGreen}>{data}</Text>
        else
            return <Text style={styles.monitorTextGreen}>{data}</Text>
    }

    renderMaterialIcon(data,standard,icon,iconsize){
        if(data < standard)
            return <MaterialCommunityIcons name={icon} size={iconsize} color='#228B22' />
        else
            return <MaterialCommunityIcons name={icon} size={iconsize} color='#B22222' />
    }

    renderFontAwesome5(data,standard,icon,iconsize){
        if(data < standard)
            return <FontAwesome5 name={icon} size={iconsize} color='#228B22' />
        else
            return <FontAwesome5 name={icon} size={iconsize} color='#B22222' />
    }

    renderEntypo(data,standard,icon,iconsize){
        if(data < standard)
            return <Entypo name={icon} size={iconsize} color='#228B22' />
        else
            return <Entypo name={icon} size={iconsize} color='#B22222' />
    }

    renderTabs() {
        if (this.props.edimaxdata.length != 0 || this.props.edimaxdata != null) {
            return (
                <Tabs initialPage={0}>
                    {this.props.edimaxdata.map((data, index) => {
                        return (
                            <Tab textStyle={styles.tabText}
                                activeTextStyle={styles.activeTabText}
                                tabStyle={styles.tabStyle}
                                activeTabStyle={styles.activeTabStyle}
                                heading={data.name}>
                                <View>
                                    <View style={styles.monitorRow}>
                                        <View style={styles.monitorItem}>
                                            {this.renderItemHeader('PM1',data.pm1,100)}
                                            {this.renderMaterialIcon(data.pm1,100,'weather-windy',31)}
                                            {this.renderItemText(data.pm1,100)}
                                        </View>
                                        <View style={styles.monitorItem}>
                                            {this.renderItemHeader('PM2.5',data.pm25,100)}
                                            {this.renderFontAwesome5(data.pm25,100,'wind',30)}
                                            {this.renderItemText(data.pm25,100)}
                                        </View>
                                        <View style={styles.monitorItem}>
                                            {this.renderItemHeader('PM10',data.pm10,100)}
                                            {this.renderMaterialIcon(data.pm10,100,'weather-windy-variant',31)}
                                            {this.renderItemText(data.pm10,100)}
                                        </View>
                                    </View>
                                    <View style={styles.monitorRow}>
                                        <View style={styles.monitorItem}>
                                            {this.renderItemHeader('CO',data.co,9)}
                                            {this.renderEntypo(data.co,9,'cloud',35)}
                                            {this.renderItemText(data.co,9)}
                                        </View>
                                        <View style={styles.monitorItem}>
                                            {this.renderItemHeader('CO2',data.co2,2000)}
                                            {this.renderMaterialIcon(data.co2,2000,'periodic-table-co2',35)}
                                            {this.renderItemText(data.co2,2000)}
                                        </View>
                                        <View style={styles.monitorItem}>
                                            {this.renderItemHeader('TVOC',data.tvoc,1000)}
                                            {this.renderEntypo(data.tvoc,1000,'air',35)}
                                            {this.renderItemText(data.tvoc,1000)}
                                        </View>
                                    </View>
                                    <View style={styles.monitorRow}>
                                        <View style={styles.monitorItem}>
                                            {this.renderTempItem('Temp',data.t,23,27)}
                                            {this.renderTempIcon(data.t,23,27,'temperature-high',35)}
                                            {this.renderTempText(data.t,23,27)}
                                        </View>
                                        <View style={styles.monitorItem}>
                                            {this.renderHumItem('Humid',data.h,30,70)}
                                            {this.renderHumIcon(data.h,30,70,'water',30)}
                                            {this.renderHumText(data.h,30,70)}
                                        </View>
                                        <View style={styles.monitorItem}>
                                            <Text style={styles.monitorHeaderGreen}>HCHO</Text>
                                            <FontAwesome5 name="water" size={35} color="#228B22" />
                                            <Text style={styles.monitorTextGreen}>{data.hcho}</Text>
                                        </View>
                                    </View>
                                </View>
                            </Tab>
                        )
                    })}
                </Tabs>
            )
        }
        else {
            return (<View />)
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
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
        backgroundColor: "#EFEFEF",
    },
    tabText: {
        color: 'white',
        fontSize: 10,
        fontWeight: '500'
    },
    activeTabText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    tabStyle: {
        backgroundColor: '#13304F',
        borderBottomWidth: 0.5,
        borderBottomColor: '#989898'	
    },
    activeTabStyle: {
        backgroundColor: '#13304F'
    },
    monitorRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#EFEFEF"
    },
    monitorItem: {
        marginTop: 50,
        width: Dimensions.get('window').width / 3,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#EFEFEF",
    },
    monitorHeaderGreen: {
        marginBottom: 10,
        fontSize: 22,
        color: '#228B22',
        fontWeight: 'bold'
    },
    monitorHeaderRed: {
        marginBottom: 10,
        fontSize: 22,
        color: '#B22222',
        fontWeight: 'bold'
    },
    monitorHeaderBlue: {
        marginBottom: 10,
        fontSize: 22,
        color: '#00CED1',
        fontWeight: 'bold'
    },
    monitorTextGreen: {
        marginTop: 15,
        fontSize: 20,
        color: '#228B22',
        fontWeight: 'bold'
    },
    monitorTextRed: {
        marginTop: 15,
        fontSize: 20,
        color: '#B22222',
        fontWeight: 'bold'
    },
    monitorTextBlue: {
        marginTop: 15,
        fontSize: 20,
        color: '#00CED1',
        fontWeight: 'bold'
    }
})
