import React from 'react';
import {View, Pressable, Image, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {images, Profile, DrawerIcon} from '@assets';
import * as Screen from '@screens';
import {CommonStyles, Colors} from '@resources';
import {BottomNavigator} from './BottomNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const commonHeader = ({navigation, route}) => {
    return {
      headerShown: true,

      headerBackVisible: false,
      animation: 'simple_push',
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#F5F5F5',
      },
      headerLeft: () => {
        return (
          <Pressable onPress={() => navigation.goBack()}>
            <DrawerIcon style={[{marginLeft: 10}]} />
          </Pressable>
        );
      },
      headerRight: () => {
        return (
          <Pressable onPress={() => {}}>
            <Profile width={30} height={30} style={[{marginRight: 10}]} />
          </Pressable>
        );
      },
    };
  };
  function addScreen(name, extraProps = {}, isNavigator) {
    return (
      <Stack.Screen name={name} component={Screen[name]} {...extraProps} />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.screenBackground,
          },
        }}
        initialRouteName={'LoginScreen'}>
        <Stack.Screen name={'BottomNavigator'} component={BottomNavigator} />
        {addScreen('LoginScreen')}
        {addScreen('SignupScreen')}
        {addScreen('OtpScreen')}
        {addScreen('PartnerScreen')}
        <Stack.Group screenOptions={commonHeader}>
          {addScreen('DetailScreen')}
          {addScreen('AccountScreen')}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {StackNavigator};
