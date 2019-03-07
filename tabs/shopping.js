import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Left, Button, Right } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SideHeader from '../components/sideheader';

class Shopping extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SideHeader />
                <Text style={styles.header}>Shopping Cart</Text>
                <View style={styles.shoppingContainer}>
                    <View style={styles.shoppingHeaderWrapper}>
                        <Text style={styles.shoppingHeader}>Total in Cart</Text>
                    </View>
                    <View style={styles.shoppingTable}>
                        <Text style={styles.shoppingTableName}>Name</Text>
                        <Text style={styles.shoppingTableAmount}>Amount</Text>
                        <Text style={styles.shoppingTablePrice}>Price</Text>
                    </View>
                    {this.props.shopping.map((data, index) => {
                        return (
                            <View style={styles.shoppingCard}>
                                <Text style={styles.shoppingCardName}>{data.name}</Text>
                                <Text style={styles.shoppingCardAmount}>{data.amount}</Text>
                                <Text style={styles.shoppingCardPrice}>{data.price * data.amount}</Text>
                            </View>
                        )
                    })}
                    <View style={styles.shoppingButton}>
                        <Button style={styles.confirmButton}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    shopping: state.shoppingReducer.shoppings
})

export default connect(mapStateToProps, null)(Shopping)

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
    shoppingContainer: {
        marginTop: 15,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#9AABB4',
        borderRadius: 5,
        backgroundColor: 'white'
    },
    shoppingHeaderWrapper: {
        justifyContent: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#9AABB4'
    },
    shoppingHeader: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#272727'
    },
    shoppingTable: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#9AABB4',
    },
    shoppingTableName: {
        width: '55%',
        fontSize: 18,
        marginLeft: '2%',
        color: '#272727'
    },
    shoppingTablePrice: {
        width: '21.5%',
        fontSize: 18,
        color: '#272727',
        textAlign: 'center'
    },
    shoppingTableAmount: {
        width: '21.5%',
        fontSize: 18,
        color: '#272727',
        textAlign: 'center'
    },
    shoppingCard: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#9AABB4',
    },
    shoppingCardName: {
        width: '55%',
        fontSize: 18,
        marginLeft: '2%',
        color: '#272727'
    },
    shoppingCardPrice: {
        width: '21.5%',
        fontSize: 18,
        color: '#272727',
        textAlign: 'center'
    },
    shoppingCardAmount: {
        width: '21.5%',
        fontSize: 18,
        color: '#272727',
        textAlign: 'center'
    },
    shoppingButton: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'flex-end'
    },
    confirmButton: {
        width: 70,
        height: 35,
        marginRight: 15,
        borderColor: '#228B22',
        borderWidth: 1.5,
        borderRadius: 2.5,
        backgroundColor: '#32CD32',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
    }
})