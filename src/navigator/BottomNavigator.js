import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '@resources';
import {images, Home, WishList, BottomDrawer, Cart} from '@assets';
import * as Screen from '@screens';
const Tab = createBottomTabNavigator();

function BottomNavigator(props) {
  function tabScreen(name, label, ICON, extraprops = {}) {
    return (
      <Tab.Screen
        name={name}
        component={Screen[name]}
        options={{
          //  tabBarLabel: label,
          tabBarIcon: ({focused, color}) => <ICON />,
        }}
      />
    );
  }

  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#fff'}}
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,

        headerShadowVisible: false,
        tabBarHideOnKeyboard: true,
        headerStyle: {
          backgroundColor: '#F5F5F5',
        },
      }}
      initialRouteName={'HomeScreen'}>
      {tabScreen('HomeScreen', 'Home', Home)}
      {tabScreen('ListScreen', 'Home', BottomDrawer)}
      {tabScreen('WishListScreen', 'Home', WishList)}
      {tabScreen('CartScreen', 'details', Cart)}
    </Tab.Navigator>
  );
}

export {BottomNavigator};
