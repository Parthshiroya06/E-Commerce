/* @flow weak */

import React from 'react';
import {Pressable, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {
  FontFamily,
  responsiveWidth,
  responsiveHeight,
  CommonStyles,
  Colors,
  FontSize,
} from '@resources';

const CustomButton = ({onPress, buttonText, buttonStyle, size = 18}) => (
  <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
    <Text
      style={CommonStyles.textStyle(
        size,
        'screenBackground',
        'Poppins_bold',
        'center',
      )}>
      {buttonText}
    </Text>
  </Pressable>
);

export {CustomButton};

const styles = StyleSheet.create({
  button: {
    height: responsiveHeight(6),
    borderRadius: responsiveHeight(1.5),
    minWidth: responsiveWidth(48),
    //  marginBottom: responsiveHeight(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
