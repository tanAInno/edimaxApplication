import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Left, Button, Right } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { setShopping } from '../actions/shopping'

class ProductTab extends Component {

    addToCart(name,price,amount){
        const shoppings = this.props.shopping
        if(shoppings.length == 0)
            shoppings.push({name: name,price: price,amount: amount})
        else{
            let same = false
            for(let i = 0;i < shoppings.length;i++){
                if(shoppings[i].name == name){
                    shoppings[i].amount += amount
                    same = true
                }
            }
            if(same == false)
                shoppings.push({name: name,price: price,amount: amount})
        }
        this.props.setShopping(shoppings)
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Product</Text>
                <View style={styles.productCard}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.productHeader}>Air Mask</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <FontAwesome style={{marginBottom: 25}}name='shopping-bag' size={100} color='#5c5c5c'/>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>Description : </Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>ราคา 100 บาท</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.buyButton} onPress={() => this.addToCart('Air Mask',100,1)}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </Button>
                    </View>
                </View>
                <Button style={styles.checkoutButton} onPress={() => Actions.Shopping()}>
                    <Text style={styles.checkoutText}>Check out</Text>
                </Button>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    shopping: state.shoppingReducer.shoppings
})

const mapDispatchToProps = dispatch => ({
    setShopping: (shoppings) => {
        console.log(shoppings)
        dispatch(setShopping(shoppings))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductTab)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "#EFEFEF",
    },
    headerContainer: {
        justifyContent: 'center',
        height: 35
    },
    header: {
        marginTop: 15,
        alignSelf: 'center',
        fontSize: 24,
        color: '#13304F'
    },
    productCard: {
        marginTop: 15,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#9AABB4',
        borderRadius: 5,
        backgroundColor: 'white'
    },
    productHeader: {
        marginLeft: 15,
        fontSize: 16,
        color: '#272727'
    },
    imageContainer: {
        width: '100%',
        height: 250,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#9AABB4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionContainer: {
        marginTop: 20,
        width: '100%',
        height: 80,
    },
    descriptionText: {
        marginLeft: 15,
        fontSize: 15,
        color: '#13304F'
    },
    priceContainer: {
        marginTop: 20,
        width: '100%',
        height: 20,
        alignItems: 'flex-end'
    },
    priceText: {
        marginRight: 20,
        fontSize: 15,
        color: '#13304F'
    },
    buttonContainer: {
        width: '90%',
        marginTop: 10,
        marginBottom: 17,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    buyButton: {
        width: 100,
        height: 40,
        borderColor: '#008B8B',
        borderWidth: 1.5,
        borderRadius: 2.5,
        backgroundColor: '#7FD0DA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkoutButton: {
        width: 120,
        height: 50,
        borderColor: '#228B22',
        borderWidth: 1.5,
        borderRadius: 2.5,
        backgroundColor: '#32CD32',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 15
    },
    buttonText: {
        fontSize: 16,
        color: '#13304F',
    },
    checkoutText: {
        fontSize: 18,
        color: 'white',
    }
})