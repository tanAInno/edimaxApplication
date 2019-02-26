import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ServiceTab from './tabs/service';
import MonitorTab from './tabs/monitor';
import axios from 'react-native-axios';

class ServiceScreen extends Component {
  render() {
    return (
      <View style={styles.serviceContainer}>
        <ServiceTab />
      </View>
    );
  }
}

class ProductScreen extends Component {
  render() {
    return (
      <View style={styles.productContainer}>
      </View>
    );
  }
}

class MonitorScreen extends Component {
  render() {
    return (
      <View style={styles.monitorContainer}>
        <MonitorTab />
      </View>
    );
  }
}

class BlogScreen extends Component {
  render() {
    return (
      <View style={styles.blogContainer}>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7FD0DA",
  },

  productContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#13304F",
  },

  monitorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7FD0DA",
  },

  blogContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9AABB4",
  },

});