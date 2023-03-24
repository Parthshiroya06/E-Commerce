/* @flow weak */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Colors, CommonStyles} from '@resources';

const WrapView = props => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={props.contentContainerStyle}
      style={[styles.container, props.style]}
      {...props}>
      {props.children}
    </KeyboardAwareScrollView>
  );
};

export {WrapView};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackground,
  },
});
