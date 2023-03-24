import {StyleSheet} from 'react-native';
import {
  FontFamily,
  responsiveWidth,
  responsiveHeight,
  CommonStyles,
  Colors,
  FontSize,
} from '@resources';
import {responsiveFont} from '../../resources';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backcolor,
    alignItems: 'center',
  },

  textinputView: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(5),
    // justifyContent: 'space-around',
    width: responsiveWidth(90),
    height: responsiveHeight(5.5),
    backgroundColor: Colors.screenBackground,
  },
  textinputStyle: {
    marginLeft: responsiveWidth(2),
    width: responsiveWidth(73),
    fontSize: responsiveFont(16),
    fontWeight: '400',
    height: responsiveHeight(5),
    padding: 0,
  },
  searchIcon: {
    width: responsiveWidth(6),
    height: responsiveHeight(3.5),
    marginLeft: responsiveWidth(3),
    alignItems: 'center',
  },
  horizontalList: {
    marginVertical: responsiveHeight(2),
    marginHorizontal: responsiveWidth(1),
    justifyContent: 'center',
    height: responsiveHeight(4.5),
    borderRadius: responsiveWidth(5),
    paddingHorizontal: responsiveWidth(5),
    //paddingVertical: responsiveWidth(0.2),
  },
  productImage: {
    borderWidth: 1,
    height: responsiveHeight(30),
    width: responsiveWidth(40),
    borderRadius: responsiveWidth(5),
  },
  productView: {
    alignItems: 'flex-start',
    height: responsiveHeight(36),
    width: responsiveWidth(42),
    marginHorizontal: responsiveWidth(2),
  },
});

export default styles;
