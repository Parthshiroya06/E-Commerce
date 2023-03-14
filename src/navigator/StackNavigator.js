import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '@resources';
import * as Screen from '@screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
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
        {addScreen('LoginScreen')}
        {addScreen('SignupScreen')}
        {addScreen('OtpScreen')}
        {addScreen('PartnerScreen')}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {StackNavigator};
