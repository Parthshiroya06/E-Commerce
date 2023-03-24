import {Text, FlatList, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WrapView} from '../../component';
import {useDispatch, useSelector} from 'react-redux';
import {SliderBox} from 'react-native-image-slider-box';
import {responsiveHeight, responsiveWidth} from '@resources';
import styles from './style';
import {images} from '@assets';
import {CommonStyles, Colors} from '@resources';
import {CustomButton} from '@component';

const DetailScreen = props => {
  const cartData = useSelector(state => state.cartData);
  const [colorIndex, setColorIndex] = useState(-1);
  const [sizeIndex, setSizeIndex] = useState(-1);

  useEffect(() => {}, []);

  fontList = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => setSizeIndex(index)}
        style={[
          styles.sizeList,
          {backgroundColor: sizeIndex == index ? '#8A8A8A' : '#F0ECED'},
        ]}>
        <Text
          style={[
            CommonStyles.textStyle(18, 'black', 'Poppins', 'center'),
            {fontWeight: '500'},
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  seletColor = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => setColorIndex(index)}
        style={[
          styles.touchColor,
          {
            borderWidth: responsiveWidth(colorIndex == index ? 0.5 : 0),
          },
        ]}>
        <View style={[styles.selfView, {backgroundColor: item}]} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageSlider}>
        <SliderBox
          images={[
            images.room_image,
            images.chair_icon2,
            images.room_image,
            images.chair_icon4,
          ]}
          sliderBoxHeight={responsiveHeight(40)}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          resizeMode={'cover'}
          dotColor="#ED6767"
          inactiveDotColor="#D9D9D9"
          dotStyle={{
            width: 20,
            height: 6,
            borderRadius: 15,

            padding: 0,
            margin: 0,
          }}
        />
      </View>
      <View style={styles.priceLabelView}>
        <Text
          style={[
            CommonStyles.textStyle(22, 'black', 'Poppins', 'center'),
            {fontWeight: '500'},
          ]}>
          {'Royal chair'}
        </Text>
        <Text
          style={[
            CommonStyles.textStyle(16, 'black', 'Poppins', 'center'),
            {fontWeight: '500', color: '#909090'},
          ]}>
          {'RS.1999/-'}
        </Text>
      </View>
      <View style={styles.sizeView}>
        <Text
          style={[
            CommonStyles.textStyle(16, 'black', 'Poppins'),
            {fontWeight: '500', marginBottom: 5},
          ]}>
          {'Size'}
        </Text>
        <FlatList
          horizontal={true}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data={['S', 'L', 'XL']}
          renderItem={({item, index}) => fontList(item, index)}
        />
      </View>
      <View style={styles.sizeView}>
        <Text
          style={[
            CommonStyles.textStyle(20, 'black', 'Poppins'),
            {fontWeight: '600', marginBottom: 5},
          ]}>
          {'Color'}
        </Text>
        <FlatList
          horizontal={true}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data={['#978D8D', '#54BFB2', '#BF5454', '#BFAE54', '#000000']}
          renderItem={({item, index}) => seletColor(item, index)}
        />
      </View>
      <CustomButton
        onPress={() => props.navigation.navigate('CartScreen')}
        buttonText={'Add to Cart'}
        size={20}
        buttonStyle={{
          marginTop: responsiveHeight(2),
          backgroundColor: Colors.orange,
          height: responsiveHeight(6),
          borderRadius: responsiveHeight(2),
          width: responsiveWidth(90),
        }}
      />
    </View>
  );
};

export {DetailScreen};
