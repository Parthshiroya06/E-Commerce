import {StyleSheet, Text, View} from 'react-native';

import {
  FontFamily,
  responsiveWidth,
  responsiveHeight,
  CommonStyles,
  Colors,
  FontSize,
} from '@resources';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textView: {
    alignItems: 'center',
    marginTop: responsiveHeight(5),
  },
  loginView: {
    width: responsiveWidth(85),
    height: responsiveHeight(57),
    // borderWidth: 1,

    backgroundColor: Colors.screenBackground,
    marginTop: responsiveHeight(5),
    borderRadius: responsiveHeight(1.5),
    elevation: responsiveHeight(0.6),
  },
  bottomTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(8),
    marginHorizontal: responsiveWidth(5),
  },

  imageStyle: {
    resizeMode: 'cover',
    // overflow: 'visible',
    width: responsiveWidth(100),
    height: responsiveHeight(75),
  },
  text: {
    fontFamily: FontFamily['Poppins'],
  },
  toggleButton: {
    width: responsiveWidth(3.5),
    height: responsiveHeight(1.8),
    marginRight: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  toggelImage: {
    aspectRatio: 1,
    alignSelf: 'center',
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    backgroundColor: Colors.orange,
    width: responsiveWidth(75),
  },
  signInTouchView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

    marginTop: responsiveHeight(15),
    marginBottom: responsiveHeight(3),
    flexDirection: 'row',
  },
});

export default styles;
