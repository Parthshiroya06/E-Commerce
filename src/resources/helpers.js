import {Dimensions, PixelRatio} from 'react-native';
const {height, width} = Dimensions.get('window');

const scale = height / 800;

export const responsiveHeight = h => {
  return PixelRatio.roundToNearestPixel(height * (h / 100));
};

export const responsiveWidth = w => {
  return PixelRatio.roundToNearestPixel(width * (w / 100));
};

export const responsiveFont = size => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
