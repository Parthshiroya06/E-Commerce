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
    alignItems: 'center',
  },
  cartDetailView2: {
    marginTop: responsiveHeight(2),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(95),
    height: responsiveHeight(20),
  },
  cartDetailView: {
    width: responsiveWidth(90),
    height: responsiveHeight(18),

    flexDirection: 'row',
  },
  cartImage: {
    width: responsiveWidth(25),
    height: responsiveHeight(18),
    borderRadius: 10,
  },
  circle: {
    width: responsiveWidth(8),
    borderRadius: responsiveHeight(8),
    height: responsiveHeight(4),
    marginHorizontal: responsiveWidth(2),
  },
  sizeList: {
    marginHorizontal: 5,
    width: responsiveWidth(8),
    justifyContent: 'center',
    height: responsiveHeight(4),
    borderRadius: responsiveHeight(10),
  },
  textView: {
    width: responsiveWidth(85),
    flexDirection: 'row',
    marginTop: responsiveHeight(1),

    justifyContent: 'space-between',
  },
  buttonStyle: {
    marginVertical: responsiveHeight(1),

    backgroundColor: Colors.orange,
    height: responsiveHeight(6),
    borderRadius: responsiveHeight(2),

    width: responsiveWidth(90),
  },
});

export default styles;
