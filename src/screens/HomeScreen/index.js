import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {
  images,
  SearchSvg,
  Chair1,
  SearchOrange,
  Chair2,
  Chair3,
  Chair4,
  DrawerIcon,
  NotificationIcon,
  Profile,
  UnLike,
  LikeIcon,
} from '@assets';
import {CommonStyles, Colors} from '@resources';
import styles from './style';
import {responsiveHeight, responsiveWidth} from '../../resources';

const HomeScreen = props => {
  const [input, setInput] = useState('');
  const [matchIndex, setMatchIndex] = useState(-1);
  const [isWishlist, setIsWishlist] = useState(-1);
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: '',
      headerLeft: () => {
        return (
          <Pressable onPress={() => {}} style={{marginLeft: 20}}>
            <DrawerIcon width={20} height={25} />
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
              <SearchOrange width={20} height={20} />
            </Pressable>
            <Pressable onPress={() => {}}>
              <NotificationIcon
                width={20}
                height={20}
                style={{marginHorizontal: 20}}
              />
            </Pressable>
            <Pressable
              onPress={() => props.navigation.navigate('AccountScreen')}>
              <Profile width={20} height={20} style={{marginRight: 10}} />
            </Pressable>
          </View>
        );
      },
      headerBackVisible: false,
      cardShadowEnabled: false,
      headerStyle: {elevation: 0, shadowOpacity: 0},
    });
  }, []);

  _renderProductView = (item, index) => {
    const DATA = item.image;
    return (
      <TouchableOpacity
        style={styles.productView}
        onPress={() => props.navigation.navigate('DetailScreen')}>
        <DATA style={styles.productImage} />
        <Text
          style={[
            CommonStyles.textStyle(14, 'black', 'Poppins', 'center'),
            {fontWeight: '600'},
          ]}>
          {item.name}
        </Text>
        <Text
          style={[
            CommonStyles.textStyle(12, '#909090', 'Poppins', 'center'),
            {fontWeight: '600'},
          ]}>
          {item.price}
        </Text>
        <TouchableOpacity
          onPress={() => setIsWishlist(index)}
          style={{
            position: 'absolute',
            top: responsiveHeight(2),
            right: responsiveWidth(5),
            padding: responsiveHeight(1.2),

            borderRadius: responsiveHeight(5),
            backgroundColor: 'white',
          }}>
          {isWishlist ? <UnLike /> : <LikeIcon />}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-start', marginTop: 10}}>
        <Text
          style={[
            CommonStyles.textStyle(25, 'black', 'Poppins', 'center'),
            {fontWeight: '400'},
          ]}>
          {'Match your Style'}
        </Text>
        <View style={styles.textinputView}>
          <SearchSvg width={20} height={20} style={styles.searchIcon} />

          <TextInput
            style={styles.textinputStyle}
            placeholder="Search"
            placeholderTextColor={'#A5A5A5'}
            value={input}
            onChangeText={setInput}
          />
        </View>
      </View>
      <FlatList
        horizontal={true}
        contentContainerStyle={{
          marginVertical: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={['Trending Now', 'All', 'New']}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setMatchIndex(index)}
              style={[
                styles.horizontalList,
                {
                  backgroundColor:
                    matchIndex == index ? Colors.orange : '#E7E7E7',
                },
              ]}>
              <Text
                style={[
                  CommonStyles.textStyle(
                    14,
                    matchIndex == index ? 'screenBackground' : '#8A8A8A',
                    'Poppins',
                    'center',
                  ),
                  {fontWeight: '600'},
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <FlatList
        numColumns={'2'}
        contentContainerStyle={{
          justifyContent: 'space-between',
        }}
        data={[
          {
            name: 'Round chair',
            image: Chair1,
            price: 'RS.2,999/-',
          },
          {
            name: 'Royal chair',
            image: Chair2,
            price: 'RS.1,999/-',
          },
          {
            name: 'Round chair',
            image: Chair3,
            price: 'RS.2,999/-',
          },
          {
            name: 'Royal chair',
            image: Chair4,
            price: 'RS.1,999/-',
          },
        ]}
        renderItem={({item, index}) => {
          return _renderProductView(item, index);
        }}
      />
    </View>
  );
};

export {HomeScreen};
