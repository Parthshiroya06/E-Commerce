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
  imageStyle: {
    resizeMode: 'cover',
    width: responsiveWidth(100),
  },
  loginView: {
    width: responsiveWidth(85),

    backgroundColor: Colors.screenBackground,
    marginTop: responsiveHeight(5),
    borderRadius: responsiveHeight(1.5),
    elevation: responsiveHeight(0.6),
  },
  toggleButton: {
    width: responsiveWidth(3.5),
    height: responsiveHeight(2),
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
    backgroundColor: '#C28558',
    width: responsiveWidth(75),
  },
  bottomTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(8),
    marginHorizontal: responsiveWidth(3),
  },
  signInTouchView: {
    justifyContent: 'center',
    marginVertical: responsiveHeight(3),
    flexDirection: 'row',
  },
  backTouch: {alignSelf: 'center', marginVertical: 10},
  backImage: {
    aspectRatio: 1,
  },
});

export default styles;
