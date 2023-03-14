import React from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  FontFamily,
  responsiveWidth,
  responsiveHeight,
  CommonStyles,
  Colors,
  FontSize,
} from '@resources';
import {images} from '@assets';
const InputBox = props => {
  const {leftIcon, rightIcon} = props;
  return (
    <View style={[styles.container, props.textView]}>
      <View style={styles.leftIcon}>
        <Image source={images[leftIcon]} style={{resizeMode: 'contain'}} />
      </View>
      <TextInput
        ref={props.phoneRef}
        style={styles.textInput(rightIcon ? 55 : 66)}
        placeholderTextColor={Colors.lightGrey}
        onSubmitEditing={props.onSubmitEditing}
        secureTextEntry={props.isSecure}
        {...props}
      />
      {rightIcon && (
        <TouchableOpacity onPress={props.hideText} style={styles.rightIcon}>
          <Image source={images[rightIcon]} style={{resizeMode: 'contain'}} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export {InputBox};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    flexDirection: 'row',
    borderRadius: responsiveHeight(1),
    marginHorizontal: responsiveWidth(3),
    marginTop: responsiveHeight(5),
  },
  leftIcon: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.lightGrey,

    borderRightWidth: 1,
  },
  rightIcon: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.lightGrey,

    borderLeftWidth: 1,
  },

  textInput: (width = 65) => {
    return {
      height: responsiveHeight(5),
      width: responsiveWidth(width),
      marginTop: responsiveHeight(1),
      paddingHorizontal: responsiveWidth(3),
      borderRadius: responsiveHeight(0.7),

      paddingVertical: responsiveWidth(2),
      borderColor: Colors.lightGrey,
      backgroundColor: Colors.offWhite,

      ...CommonStyles.textStyle(15, 'black', 'Inter'),
    };
  },
});
