import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ServiceTab from './tabs/service';
import MonitorTab from './tabs/monitor';
import ProductTab from './tabs/product';
import axios from 'react-native-axios';
import { Right, Header } from 'native-base';
import AppHeader from './components/header'

class ServiceScreen extends Component {
  render() {
    return (
      <View style={styles.serviceContainer}>
        <AppHeader />
        <ServiceTab />
      </View>
    );
  }
}

class ProductScreen extends Component {
  render() {
    return (
      <View style={styles.productContainer}>
        <AppHeader />
        <ProductTab />
      </View>
    );
  }
}

class MonitorScreen extends Component {
  render() {
    return (
      <View style={styles.monitorContainer}>
        <AppHeader />
        <MonitorTab />
      </View>
    );
  }
}

class BlogScreen extends Component {
  render() {
    return (
      <View style={styles.blogContainer}>
        <AppHeader />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Service: ServiceScreen,
  Product: ProductScreen,
  Monitor: MonitorScreen,
  Blog: BlogScreen,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Service') {
          return <AntDesign name="customerservice" size={20} styles={styles.serviceicon} color={tintColor} />
        } else if (routeName === 'Product') {
          return <FontAwesome name="shopping-cart" size={20} color={tintColor} />
        } else if (routeName === 'Monitor') {
          return <Foundation name="graph-trend" size={25} color={tintColor} />
        } else if (routeName === 'Blog') {
          return <MaterialCommunityIcons name="blogger" size={25} color={tintColor} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#13304F',
      inactiveTintColor: '#9AABB4',
    },
  }
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  serviceContainer: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },

  productContainer: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },

  monitorContainer: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },

  blogContainer: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },

});