import React, {useEffect, useState, useRef} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from 'react-native';
import MaskInput from 'react-native-mask-input';

import {images} from '@assets';
import {CommonStyles, Colors} from '@resources';
import {InputBox, CustomButton} from '@component';
import styles from './style';
import {useStateWithCallbackLazy} from 'use-state-with-callback';

const OtpScreen = props => {
  const [input, setInputs] = useStateWithCallbackLazy(new Array(4).fill());

  let itemsRef = useRef([]);

  const onSubmitButton = async () => {};

  const changeText = (val, index) => {
    setInputs(
      state => [...state].fill(val, index, index + 1),
      () => {
        if (index < 3 && val) {
          return itemsRef.current[index + 1].focus();
        }
      },
    );
  };

  const _renderTextInput = (values, index) => {
    return (
      <MaskInput
        key={index}
        placeholder=""
        ref={refs => (itemsRef.current[index] = refs)}
        style={[
          styles.textInputView,
          CommonStyles.textStyle(25, 'black', 'Poppins', 'center'),
        ]}
        underlineColorAndroid={Colors.lightGrey}
        value={input[index]}
        onChangeText={(masked, unmasked) => changeText(unmasked, index)}
        onSubmitEditing={() => {
          index < 3 && input[index]
            ? itemsRef.current[index + 1].focus()
            : onSubmitButton();
        }}
        maxLength={1}
        keyboardType={'number-pad'}
        returnKeyType={index < 3 ? 'next' : 'done'}
        blurOnSubmit={index < 3 ? false : true}
        selectTextOnFocus={Number(input[index]) ? true : false}
        mask={[/[0-9]/]}
      />
    );
  };

  return (
    <ScrollView>
      <ImageBackground
        source={images.background_image}
        style={styles.imageStyle}>
        <View style={styles.container}>
          <View style={styles.textView}>
            <Text
              style={[
                CommonStyles.textStyle(28, 'screenBackground', 'Poppins'),
                {fontWeight: '600'},
              ]}>
              {'Enter OTP'}
            </Text>
          </View>
          <View style={styles.loginView}>
            <View style={styles.inputTextMainView}>
              {input.map((v, i) => _renderTextInput(v, i))}
            </View>
            <TouchableOpacity style={styles.resetView}>
              <Text style={CommonStyles.textStyle(16, 'darkGrey', 'Poppins')}>
                {'Resend OTP?'}
              </Text>
            </TouchableOpacity>
            <CustomButton
              onPress={() => props.navigation.navigate('BottomNavigator')}
              buttonText={'SUBMIT'}
              buttonStyle={styles.buttonStyle}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export {OtpScreen};
