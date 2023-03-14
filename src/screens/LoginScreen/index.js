import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CommonStyles, Colors} from '@resources';
import {images} from '@assets';
import {InputBox, CustomButton} from '@component';
import styles from './style';
const formData = {
  email: {value: ''},
  password: {value: '', isTrue: false},
};
const LoginScreen = props => {
  const [input, setInputs] = useState(formData);
  const [toggle, SetToggle] = useState(true);
  let itemsRef = useRef();
  let inputRef2 = useRef();
  return (
    <ScrollView>
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
              {'Sing in'}
            </Text>
            <Text
              style={CommonStyles.textStyle(14, 'screenBackground', 'Poppins')}>
              {'Login to your account'}
            </Text>
          </View>
          <View style={styles.loginView}>
            <InputBox
              phoneRef={itemsRef}
              leftIcon={'user_icon'}
              placeholder={'Username or e-mail'}
              value={input.email.value}
              blurOnSubmit={false}
              returnKeyType="next"
              onChangeText={text =>
                setInputs({
                  ...input,
                  email: {value: text},
                })
              }
              onSubmitEditing={() => inputRef2.current.focus()}
            />
            <InputBox
              phoneRef={inputRef2}
              leftIcon={'user_icon'}
              rightIcon={'open_eyes'}
              placeholder={'Password'}
              value={input.password.value}
              isSecure={input.password.isTrue}
              blurOnSubmit={true}
              returnKeyType="done"
              hideText={() =>
                setInputs({
                  ...input,
                  password: {
                    ...input.password,
                    isTrue: !input.password.isTrue,
                  },
                })
              }
              onChangeText={text =>
                setInputs({
                  ...input,
                  password: {...input.password, value: text},
                })
              }
              onSubmitEditing={() => inputRef2.current.focus()}
            />

            <View style={styles.bottomTextView}>
              <Text style={CommonStyles.textStyle(14, 'darkGrey', 'Poppins')}>
                {'Forgot password'}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.toggleButton}
                  onPress={() => {
                    SetToggle(!toggle);
                  }}>
                  {toggle && (
                    <Image
                      source={images.right_icon}
                      style={styles.toggelImage}
                    />
                  )}
                </TouchableOpacity>
                <Text style={CommonStyles.textStyle(14, 'darkBlue', 'Poppins')}>
                  {'Keep me Signed'}
                </Text>
              </View>
            </View>
            <CustomButton
              onPress={() => props.navigation.navigate('OtpScreen')}
              buttonText={'SIGN IN'}
              buttonStyle={styles.buttonStyle}
            />
            <CustomButton
              PartnerScreen
              onPress={() => props.navigation.navigate('PartnerScreen')}
              buttonText={'Become  a partner'}
              buttonStyle={styles.buttonStyle}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.signInTouchView}>
        <Text style={CommonStyles.textStyle(14, 'darkGrey', 'Poppins')}>
          {'Don’t have an account?'}
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignupScreen')}>
          <Text style={CommonStyles.textStyle(14, 'darkBlue', 'Poppins')}>
            {'Sign up now!'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export {LoginScreen};
