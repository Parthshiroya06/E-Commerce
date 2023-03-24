import React, {useEffect} from 'react';
import {Text, Pressable, Image, ScrollView, View, FlatList} from 'react-native';
import {
  images,
  Grater,
  Delete,
  Chair1,
  Profile,
  Chair2,
  Chair3,
  Chair4,
} from '@assets';

import {CommonStyles, Colors} from '@resources';
import {CustomButton} from '@component';
import styles from './style';
const CartScreen = props => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'My Cart',
      headerTitleAlign: 'center',
      headerStyle: {
        fontWeight: '400',
        fontSize: 26,
        fontFamily: 'Poppins',
        backgroundColor: 'red',
      },
      headerLeft: () => {
        return (
          <Pressable
            onPress={() => {}}
            style={{marginLeft: 20, backgroundColor: '#FFFFF'}}>
            <Grater />
          </Pressable>
        );
      },
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable onPress={() => {}}>
              <Profile style={{marginRight: 10}} />
            </Pressable>
          </View>
        );
      },
      headerBackVisible: false,
      cardShadowEnabled: false,
      headerStyle: {elevation: 0, shadowOpacity: 0},
    });
  }, []);

  _renderText = (label, price, obj = {}, textStyle = {}) => {
    return (
      <View style={[styles.textView, obj]}>
        <Text
          style={[
            CommonStyles.textStyle(18, 'darkGrey', 'Poppins', 'center'),
            {fontWeight: '500'},
          ]}>
          {label}
        </Text>
        <Text
          style={[
            CommonStyles.textStyle(18, 'darkGrey', 'Poppins', 'center'),
            textStyle,
          ]}>
          {price}
        </Text>
      </View>
    );
  };

  _renderCartView = (item, index) => {
    return (
      <View style={[{flexDirection: 'row'}, styles.cartDetailView2]}>
        <View style={styles.cartDetailView}>
          <Image source={images[item.image]} style={styles.cartImage} />
          <View
            style={{
              marginLeft: 5,
              alignItems: 'flex-start',
              justifyContent: 'space-around',
            }}>
            <Text
              style={[
                CommonStyles.textStyle(18, 'black', 'Poppins', 'center'),
                {fontWeight: '500'},
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                CommonStyles.textStyle(18, 'darkGrey', 'Poppins', 'center'),
                {fontWeight: '500'},
              ]}>
              {'RS.1,999/-'}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={[styles.circle, {backgroundColor: item.color}]} />
              <View style={[styles.sizeList, {backgroundColor: '#F0ECED'}]}>
                <Text
                  style={[
                    CommonStyles.textStyle(22, 'black', 'Poppins', 'center'),
                    {fontWeight: '500'},
                  ]}>
                  {item.size}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Delete
          width={20}
          height={20}
          style={{color: '#C28558', marginTop: 10}}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            name: 'Royal chair',
            image: 'chair_icon',
            price: 'RS.1,999/-',
            color: '#7094C1',
            size: 'L',
          },
          {
            name: 'Demo Chair',
            image: 'chair_icon4',
            price: 'Rs. 1,449/-',
            color: '#F68CB5',
            size: 'M',
          },
          {
            name: 'Demo chair 2',
            image: 'chair_icon3',
            price: 'Rs. 1,099/-',
            color: '#000000',
            size: 'M',
          },
        ]}
        renderItem={({item, index}) => _renderCartView(item, index)}
      />

      {_renderText('Total:', 'Rs.4597/-', {}, {fontWeight: '600'})}
      {_renderText(
        'Shopping:',
        'Rs.0.0',

        {
          paddingBottom: 10,
          borderBottomWidth: 0.5,
        },
        {fontWeight: '600'},
      )}
      {_renderText(
        'Grand Total:',
        'Rs. 4597/-',
        {marginVertical: 5},
        {color: 'black', fontWeight: '600'},
      )}
      <CustomButton
        onPress={() => props.navigation.navigate('CartScreen')}
        buttonText={'Checkout'}
        buttonStyle={styles.buttonStyle}
        size={20}
      />
    </View>
  );
};

export {CartScreen};
