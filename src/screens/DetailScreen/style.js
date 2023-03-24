import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '@resources';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ' #F5F5F5',
  },
  imageSlider: {
    width: responsiveWidth(90),
    height: responsiveHeight(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceLabelView: {
    width: responsiveWidth(90),
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  sizeList: {
    marginHorizontal: 10,
    width: responsiveWidth(8),
    justifyContent: 'center',
    height: responsiveHeight(4),
    borderRadius: responsiveHeight(10),
  },
  sizeView: {width: responsiveWidth(90), marginTop: responsiveHeight(2)},
  selfView: {
    width: responsiveWidth(8),
    borderRadius: responsiveHeight(10),
    height: responsiveHeight(4),
    marginHorizontal: responsiveWidth(2),
  },
  touchColor: {
    width: responsiveWidth(10),
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: responsiveHeight(10),
    height: responsiveHeight(5),
    marginHorizontal: responsiveWidth(2),
  },
  buttonStyles: {
    alignSelf: 'center',

    backgroundColor: Colors.orange,
    width: responsiveWidth(75),
  },
});

export default styles;
