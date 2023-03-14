import {StyleSheet} from 'react-native';
import {Colors} from './colors';
import {FontFamily, FontSize} from './fonts';
import {responsiveWidth, responsiveHeight} from './helpers';

export const CommonStyles = StyleSheet.create({
  textStyle: (size = 18, color = 'black', type = 'Poppins', textAlign) => ({
    color: Colors[color],
    fontFamily: FontFamily[type],
    fontSize: FontSize(size),
    includeFontPadding: false,
    textAlign: textAlign,
  }),

  squareLayout: (size, fromWidth = false) => ({
    height: fromWidth ? responsiveWidth(size) : responsiveHeight(size),
    aspectRatio: 1,
  }),
});
