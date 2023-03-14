import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {CommonStyles, Colors} from '@resources';
import {images} from '@assets';
import {InputBox, CustomButton} from '@component';
import styles from './style';

const formData = {
  full_name: {value: ''},
  email: {value: ''},
  phone: {value: ''},
  create_password: {value: '', isTrue: false},
  new_password: {value: '', isTrue: false},
  address: {value: '', isTrue: false},
};
const PartnerScreen = props => {
  const [input, setInputs] = useState(formData);
  const [toggle, SetToggle] = useState(true);
  let itemsRef = useRef();
  let inputRef2 = useRef();
  let inputRef3 = useRef();
  let inputRef4 = useRef();
  let inputRef5 = useRef();
  let inputRef6 = useRef();
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={images.background_image}
        style={styles.imageStyle}>
        <View style={styles.container}>
          <View style={styles.textView}>
            <Text
              style={CommonStyles.textStyle(
                28,
                'screenBackground',
                'Poppins_bold',
              )}>
              {'Sing up'}
            </Text>
            <Text
              style={CommonStyles.textStyle(14, 'screenBackground', 'Poppins')}>
              {'Create a Partner account'}
            </Text>
          </View>
          <View style={styles.loginView}>
            <InputBox
              phoneRef={itemsRef}
              leftIcon={'user_icon'}
              placeholder={'Full name'}
              value={input.full_name.value}
              blurOnSubmit={false}
              returnKeyType="next"
              onChangeText={text =>
                setInputs({
                  ...input,
                  full_name: {value: text},
                })
              }
              onSubmitEditing={() => inputRef2.current.focus()}
            />
            <InputBox
              phoneRef={inputRef2}
              leftIcon={'email_icon'}
              placeholder={'E-mail address'}
              value={input.email.value}
              blurOnSubmit={false}
              returnKeyType="next"
              onChangeText={text =>
                setInputs({
                  ...input,
                  email: {value: text},
                })
              }
              onSubmitEditing={() => inputRef3.current.focus()}
            />
            <InputBox
              phoneRef={inputRef3}
              leftIcon={'phone_icon'}
              placeholder={'Phone number'}
              value={input.phone.value}
              blurOnSubmit={false}
              returnKeyType="next"
              onChangeText={text =>
                setInputs({
                  ...input,
                  phone: {value: text},
                })
              }
              onSubmitEditing={() => inputRef4.current.focus()}
            />
            <InputBox
              phoneRef={inputRef4}
              leftIcon={'location_icon'}
              rightIcon={'open_eyes'}
              placeholder={'Address'}
              isSecure={input.address.isTrue}
              value={input.address.value}
              blurOnSubmit={false}
              returnKeyType="next"
              onChangeText={text =>
                setInputs({
                  ...input,
                  address: {...input.address, value: text},
                })
              }
              hideText={() =>
                setInputs({
                  ...input,
                  address: {
                    ...input.address,
                    isTrue: !input.address.isTrue,
                  },
                })
              }
              onSubmitEditing={() => inputRef5.current.focus()}
            />

            <InputBox
              phoneRef={inputRef5}
              leftIcon={'lock_icon'}
              rightIcon={'open_eyes'}
              placeholder={'Create password'}
              value={input.create_password.value}
              blurOnSubmit={false}
              isSecure={input.create_password.isTrue}
              returnKeyType="next"
              hideText={() =>
                setInputs({
                  ...input,
                  create_password: {
                    ...input.create_password,
                    isTrue: !input.create_password.isTrue,
                  },
                })
              }
              onChangeText={text =>
                setInputs({
                  ...input,
                  create_password: {...input.create_password, value: text},
                })
              }
              onSubmitEditing={() => inputRef6.current.focus()}
            />
            <InputBox
              phoneRef={inputRef6}
              leftIcon={'lock_icon'}
              placeholder={'Confirm password'}
              value={input.new_password.value}
              blurOnSubmit={true}
              returnKeyType="done"
              onChangeText={text =>
                setInputs({
                  ...input,
                  new_password: {value: text},
                })
              }
            />

            {/* <View style={styles.signInTouchView}>
              <Text style={CommonStyles.textStyle(16, 'darkGrey', 'Poppins')}>
                {'Already have an account? '}
              </Text>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text style={CommonStyles.textStyle(16, 'darkBlue', 'Poppins')}>
                  {'Sign in Now!'}
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </ImageBackground>
      <CustomButton
        onPress={() => props.navigation.goBack()}
        buttonText={'Submit'}
        buttonStyle={styles.buttonStyle}
      />
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backTouch}>
        <Image source={images.lessThen_icon} style={styles.backImage} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export {PartnerScreen};
