import {StyleSheet} from 'react-native';
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
  resetView: {
    alignItems: 'flex-start',
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(6),
  },
  textView: {
    alignItems: 'center',
    marginTop: responsiveHeight(5),
  },
  imageStyle: {
    resizeMode: 'cover',
    // overflow: 'visible',
    width: responsiveWidth(100),
    height: responsiveHeight(75),
  },
  loginView: {
    width: responsiveWidth(85),
    height: responsiveHeight(50),

    backgroundColor: Colors.screenBackground,
    marginTop: responsiveHeight(5),
    borderRadius: responsiveHeight(1.5),
    elevation: responsiveHeight(0.6),
  },
  textInputView: {
    height: responsiveHeight(6),
    width: responsiveWidth(11),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: responsiveHeight(0.5),
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    backgroundColor: Colors.screenBackground,
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    backgroundColor: Colors.orange,
    width: responsiveWidth(75),
  },
  inputTextMainView: {
    marginTop: responsiveHeight(12),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(75),
  },
});

export default styles;
