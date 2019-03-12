import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text, Dimensions, PixelRatio, View } from 'react-native';
import { Tab, Tabs, Button } from 'native-base';
import axios from 'react-native-axios';
import { connect } from 'react-redux';
import { setDevices } from '../actions/monitor';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const cool = '#87CEFA'
const green = '#32CD32'
const yellow = '#FFFF33'
const orange = '#FFA500'
const red = '#DC143C'
const darkred = '#a31f1f'
const purple = '#9400D3'

class MonitorTab extends Component {

    state = {
        index: 0
    }

    componentDidMount() {
        this.getEdimaxData()
        this._interval = setInterval(() => {
            this.getEdimaxData()
        }, 5000)
    }

    componentWillUnmount() {
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

    renderPMItem(data, text) {
        if (data <= 50)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewGreen}>
                        <Text style={styles.itemText}>{text}</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusGreen}>Good <FontAwesome5 name='smile' size={30} /></Text>
                    </View>
                </View>
            )
        if (data > 50 && data <= 100)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewYellow}>
                        <Text style={styles.itemText}>{text}</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusYellow}>Moderate <FontAwesome5 name='meh' size={30} /></Text>
                    </View>
                </View>
            )
        if (data > 100 && data <= 150)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewOrange}>
                        <Text style={styles.itemText}>{text}</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusOrange}>Bad <FontAwesome5 name='frown' size={30} /></Text>
                    </View>
                </View>
            )
        if (data > 150 && data <= 200)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewRed}>
                        <Text style={styles.itemText}>{text}</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusRed}>Unhealthy <FontAwesome5 name='sad-tear' size={30} /></Text>
                    </View>
                </View>
            )
        if (data > 200 && data <= 300)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewDarkRed}>
                        <Text style={styles.itemText}>{text}</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusDarkRed}>Very Unhealthy <FontAwesome5 name='sad-cry' size={25} /></Text>
                    </View>
                </View>
            )
        if (data > 300)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewPurple}>
                        <Text style={styles.itemText}>{text}</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusPurple}>Hazard <FontAwesome5 name='skull' size={30} /></Text>
                    </View>
                </View>
            )
    }

    renderCo2(data) {
        if (data <= 1000)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewGreen}>
                        <Text style={styles.itemText}>CO2</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusGreen}>Good <FontAwesome5 name='smile' size={30} /></Text>
                    </View>
                </View>
            )
        if (data > 1000 && data <= 2000)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewYellow}>
                        <Text style={styles.itemText}>CO2</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusYellow}>Moderate <FontAwesome5 name='meh' size={30} /></Text>
                    </View>
                </View>
            )
        if (data > 2000 && data <= 5000)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewRed}>
                        <Text style={styles.itemText}>CO2</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusRed} fontSize={30}>High <FontAwesome5 name='frown' size={30} /></Text>
                    </View>
                </View>
            )
        if (data > 5000)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewDarkRed}>
                        <Text style={styles.itemText}>CO2</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusDarkRed} fontSize={30}>Very High <FontAwesome5 name='sad-cry' size={30} /></Text>
                    </View>
                </View>
            )
    }

    renderTVOC(data) {
        if (data < 300)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewGreen}>
                        <Text style={styles.itemText}>TVOC</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusGreen}>Good <FontAwesome5 name='smile' size={30} /></Text>
                    </View>
                </View>
            )
        if (data >= 300 && data < 500)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewYellow}>
                        <Text style={styles.itemText}>TVOC</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusYellow}>Acceptable <FontAwesome5 name='meh' size={30} /></Text>
                    </View>
                </View>
            )
        if (data >= 500 && data < 1000)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewOrange}>
                        <Text style={styles.itemText}>TVOC</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusOrange} fontSize={30}>Marginal <FontAwesome5 name='frown' size={30} /></Text>
                    </View>
                </View>
            )
        if (data >= 1000 && data < 3000)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewRed}>
                        <Text style={styles.itemText}>TVOC</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusRed} fontSize={30}>High <FontAwesome5 name='sad-tear' size={30} /></Text>
                    </View>
                </View>
            )
        if (data >= 3000)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewDarkRed}>
                        <Text style={styles.itemText}>TVOC</Text>
                        <Text style={styles.itemNumber}>{data}</Text>
                        <Text style={styles.itemStatusDarkRed} fontSize={30}>Very High <FontAwesome5 name='sad-cry' size={30} /></Text>
                    </View>
                </View>
            )
    }

    renderTemp(data) {
        if (data <= 23)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewCool}>
                        <Text style={styles.itemTextTemp}>Temperature</Text>
                        <Text style={styles.itemNumberTemp}>{data}</Text>
                        <Text style={styles.itemStatusCool}>Cold <FontAwesome5 name='snowflake' size={30} /></Text>
                    </View>
                </View>
            )
        if (data > 23 && data <= 27)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewGreen}>
                        <Text style={styles.itemTextTemp}>Temperature</Text>
                        <Text style={styles.itemNumberTemp}>{data}</Text>
                        <Text style={styles.itemStatusGreen}>Comfort <FontAwesome5 name='smile' size={30} /></Text>
                    </View>
                </View>
            )
        if (data > 27)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewRed}>
                        <Text style={styles.itemTextTemp}>Temperature</Text>
                        <Text style={styles.itemNumberTemp}>{data}</Text>
                        <Text style={styles.itemStatusHot}>Hot <Ionicons name='ios-sunny' size={30} /></Text>
                    </View>
                </View>
            )
    }

    renderHumid(data) {
        if (data > 70)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewCool}>
                        <Text style={styles.itemTextHum}>Humidity</Text>
                        <Text style={styles.itemNumberHum}>{data}</Text>
                        <Text style={styles.itemStatusCool}>Cold <FontAwesome5 name='snowflake' size={30} /></Text>
                    </View>
                </View>
            )
        if (data >= 30 && data <= 70)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewGreen}>
                        <Text style={styles.itemTextHum}>Humidity</Text>
                        <Text style={styles.itemNumberHum}>{data}</Text>
                        <Text style={styles.itemStatusGreen}>Comfort <FontAwesome5 name='smile' size={30} /></Text>
                    </View>
                </View>
            )
        if (data < 30)
            return (
                <View style={styles.itemWrapper}>
                    <View style={styles.ViewRed}>
                        <Text style={styles.itemTextHum}>Humidity</Text>
                        <Text style={styles.itemNumberHum}>{data}</Text>
                        <Text style={styles.itemStatusHot}>Hot <Ionicons name='ios-sunny' size={30} /></Text>
                    </View>
                </View>
            )
    }

    renderButtonPM(text, data, index) {
        if (data <= 50)
            return (
                <Button style={styles.buttonGreen} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 50 && data <= 100)
            return (
                <Button style={styles.buttonYellow} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 100 && data <= 150)
            return (
                <Button style={styles.buttonOrange} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 150 && data <= 200)
            return (
                <Button style={styles.buttonRed} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 200 && data <= 300)
            return (
                <Button style={styles.buttonDarkRed} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 300)
            return (
                <Button style={styles.buttonPurple} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
    }

    renderButtonCO2(text, data, index) {
        if (data <= 1000)
            return (
                <Button style={styles.buttonGreen} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 1000 && data <= 2000)
            return (
                <Button style={styles.buttonYellow} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 2000 && data <= 5000)
            return (
                <Button style={styles.buttonRed} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 5000)
            return (
                <Button style={styles.buttonDarkRed} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
    }

    renderButtonTVOC(text, data, index) {
        if (data < 300)
            return (
                <Button style={styles.buttonGreen} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data >= 300 && data < 500)
            return (
                <Button style={styles.buttonYellow} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data >= 500 && data < 1000)
            return (
                <Button style={styles.buttonOrange} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data >= 1000 && data < 3000)
            return (
                <Button style={styles.buttonRed} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data >= 3000)
            return (
                <Button style={styles.buttonDarkRed} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
    }

    renderButtonTemp(text, data, index) {
        if (data <= 23)
            return (
                <Button style={styles.buttonCool} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 23 && data <= 27)
            return (
                <Button style={styles.buttonGreen} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data > 27)
            return (
                <Button style={styles.buttonRed} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
    }

    renderButtonHumid(text, data, index) {
        if (data > 70)
            return (
                <Button style={styles.buttonCool} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data >= 30 && data <= 70)
            return (
                <Button style={styles.buttonGreen} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
        if (data < 30)
            return (
                <Button style={styles.buttonRed} onPress={() => this.setState({ index: index })}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Button>
            )
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
                                <Swiper index={this.state.index}
                                    loop={false}
                                    height={Dimensions.get('window').height / 2.3}
                                    backgroundColor={'#283743'}
                                >
                                    {this.renderPMItem(data.pm1, 'PM1')}
                                    {this.renderPMItem(data.pm25, 'PM2.5')}
                                    {this.renderPMItem(data.pm10, 'PM10')}
                                    {this.renderCo2(data.co2)}
                                    {this.renderTVOC(data.tvoc)}
                                    {this.renderTemp(data.t)}
                                    {this.renderHumid(data.h)}
                                </Swiper>
                                <View style={styles.controlView}>
                                    <View style={styles.buttonView}>
                                        {this.renderButtonPM('PM1', data.pm1, 0)}
                                        {this.renderButtonPM('PM2.5', data.pm25, 1)}
                                        {this.renderButtonPM('PM10', data.pm10, 2)}
                                        {this.renderButtonCO2('CO2', data.co2, 3)}
                                        {this.renderButtonTVOC('TVOC', data.tvoc, 4)}
                                        {this.renderButtonTemp('Temp', data.t, 5)}
                                        {this.renderButtonHumid('Humid', data.h, 6)}
                                    </View>
                                    <View style={styles.graphView}>
                                        <Text style={styles.graphText}>Graph</Text>
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
    itemWrapper: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -15
    },
    ViewGreen: {
        alignItems: 'center',
        height: 250,
        width: 250,
        borderRadius: 250 / 2,
        borderColor: green,
        borderWidth: 10,
    },
    ViewYellow: {
        alignItems: 'center',
        height: 250,
        width: 250,
        borderRadius: 250 / 2,
        borderColor: yellow,
        borderWidth: 10,
    },
    ViewOrange: {
        alignItems: 'center',
        height: 250,
        width: 250,
        borderRadius: 250 / 2,
        borderColor: orange,
        borderWidth: 10,
    },
    ViewRed: {
        alignItems: 'center',
        height: 250,
        width: 250,
        borderRadius: 250 / 2,
        borderColor: red,
        borderWidth: 10,
    },
    ViewDarkRed: {
        alignItems: 'center',
        height: 250,
        width: 250,
        borderRadius: 250 / 2,
        borderColor: darkred,
        borderWidth: 10,
    },
    ViewPurple: {
        alignItems: 'center',
        height: 250,
        width: 250,
        borderRadius: 250 / 2,
        borderColor: purple,
        borderWidth: 10,
    },
    ViewCool: {
        alignItems: 'center',
        height: 250,
        width: 250,
        borderRadius: 250 / 2,
        borderColor: cool,
        borderWidth: 10,
    },
    itemText: {
        marginTop: 25,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    itemTextTemp: {
        marginTop: 40,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    itemTextHum: {
        marginTop: 40,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    itemNumber: {
        marginTop: 15,
        fontSize: 65,
        color: 'white',
        fontWeight: 'bold'
    },
    itemNumberTemp: {
        marginTop: 5,
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold'
    },
    itemNumberHum: {
        marginTop: 5,
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold'
    },
    itemStatusGreen: {
        marginTop: 8,
        fontSize: 30,
        color: green,
        fontWeight: 'bold'
    },
    itemStatusYellow: {
        marginTop: 8,
        fontSize: 25,
        color: yellow,
        fontWeight: 'bold'
    },
    itemStatusOrange: {
        marginTop: 8,
        fontSize: 30,
        color: orange,
        fontWeight: 'bold'
    },
    itemStatusRed: {
        marginTop: 8,
        fontSize: 25,
        color: red,
        fontWeight: 'bold'
    },
    itemStatusDarkRed: {
        marginTop: 8,
        fontSize: 20,
        color: darkred,
        fontWeight: 'bold'
    },
    itemStatusPurple: {
        marginTop: 8,
        fontSize: 30,
        color: purple,
        fontWeight: 'bold'
    },
    itemStatusCool: {
        marginTop: 8,
        fontSize: 30,
        color: cool,
        fontWeight: 'bold'
    },
    itemStatusHot: {
        marginTop: 8,
        fontSize: 30,
        color: red,
        fontWeight: 'bold'
    },
    controlView: {
        height: Dimensions.get('window').height / 1.7,
        backgroundColor: '#283743'
    },
    buttonView: {
        width: '100%',
        height: 35,
        flexDirection: 'row'
    },
    buttonGreen: {
        width: Dimensions.get('window').width / 7,
        height: '100%',
        borderWidth: 2,
        borderColor: '#EFEFEF',
        borderRadius: 0,
        justifyContent: 'center',
        backgroundColor: green
    },
    buttonYellow: {
        width: Dimensions.get('window').width / 7,
        height: '100%',
        borderWidth: 2,
        borderColor: '#EFEFEF',
        borderRadius: 0,
        justifyContent: 'center',
        backgroundColor: yellow
    },
    buttonOrange: {
        width: Dimensions.get('window').width / 7,
        height: '100%',
        borderWidth: 2,
        borderColor: '#EFEFEF',
        borderRadius: 0,
        justifyContent: 'center',
        backgroundColor: orange
    },
    buttonRed: {
        width: Dimensions.get('window').width / 7,
        height: '100%',
        borderWidth: 2,
        borderColor: '#EFEFEF',
        borderRadius: 0,
        justifyContent: 'center',
        backgroundColor: red
    },
    buttonDarkRed: {
        width: Dimensions.get('window').width / 7,
        height: '100%',
        borderWidth: 2,
        borderColor: '#EFEFEF',
        borderRadius: 0,
        justifyContent: 'center',
        backgroundColor: darkred
    },
    buttonPurple: {
        width: Dimensions.get('window').width / 7,
        height: '100%',
        borderWidth: 2,
        borderColor: '#EFEFEF',
        borderRadius: 0,
        justifyContent: 'center',
        backgroundColor: purple
    },
    buttonCool: {
        width: Dimensions.get('window').width / 7,
        height: '100%',
        borderWidth: 2,
        borderColor: '#EFEFEF',
        borderRadius: 0,
        justifyContent: 'center',
        backgroundColor: cool
    },
    buttonText: {
        fontSize: 15,
        color: '#283743'
    },
    graphView: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    graphText: {
        color: '#EFEFEF',
        fontSize: 60
    }
})
