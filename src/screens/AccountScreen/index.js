import React, {useEffect} from 'react';
import {Text, Pressable, View} from 'react-native';
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
  Profile3x,
  Edit,
  ProfilePlus,
  OrangeCart,
  Gift,
  Chat,
  Card,
  Question,
  Healper,
  Setting,
  MemberShip,
} from '@assets';
import {CommonStyles, Colors} from '@resources';
import styles from './style';
const AccountScreen = props => {
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
      headerStyle: {elevation: 0, shadowOpacity: 0, backgroundColor: '#F5F5F5'},
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text
        style={[
          CommonStyles.textStyle(25, 'black', 'Poppins', 'center'),
          {fontWeight: '400'},
        ]}>
        {'Account'}
      </Text>
      <View style={styles.profileView}>
        <Profile3x style={{marginVertical: 10}} />
        <Text
          style={[
            CommonStyles.textStyle(16, 'screenBackground', 'Poppins', 'center'),
            {fontWeight: '600'},
          ]}>
          {'Loren Sharma'}
        </Text>
        <Edit style={styles.editIcon} />
      </View>

      <View style={styles.optionSetting}>
        {[
          {name: 'Order Management', icon: OrangeCart},
          {name: 'Profile Settings', icon: ProfilePlus},
          {name: 'My Coupons', icon: Gift},
          {name: 'Memberships', icon: MemberShip},
          {name: 'Bulk Enquiry', icon: Chat},
          {name: 'Credit', icon: Card},
          {name: 'FAQ', icon: Question},
          {name: 'Support', icon: Healper},
          {name: 'Settings', icon: Setting},
        ].map((item, index) => (
          <View style={styles.options}>
            <Text
              style={[
                CommonStyles.textStyle(14, 'orange', 'Poppins', 'center'),
                {fontWeight: '500'},
              ]}>
              {item.name}
            </Text>
            <item.icon width={18} height={18} />
          </View>
        ))}
      </View>
    </View>
  );
};

export {AccountScreen};
