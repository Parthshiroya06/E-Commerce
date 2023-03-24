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
  container: {flex: 1, alignItems: 'center'},

  profileView: {
    width: responsiveWidth(90),
    height: responsiveHeight(22),
    borderRadius: responsiveHeight(2),
    // borderWidth: 1,
    alignItems: 'center',
    elevation: 2,

    backgroundColor: Colors.orange,
  },
  editIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  optionSetting: {
    width: responsiveWidth(90),
    marginTop: responsiveHeight(2),
    height: responsiveHeight(50),
    //   borderWidth: 1,
    elevation: 2.5,
    backgroundColor: Colors.screenBackground,
    borderRadius: responsiveHeight(2),
    alignItems: 'center',
  },
  options: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
