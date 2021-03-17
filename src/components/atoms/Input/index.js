import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {colors, fonts, hp, rf, wp} from '../../../constants';

const Input = ({
  placeholder,
  onChangeText,
  keyboardType,
  height,
  multiline,
  colorText,
  fontSize,
  fontFamily,
  widthInput,
  maxLength,
  suffixComponent,
  value,
  onPress,
  disabled,
  paddingHorizontal,
  paddingRight,
}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        style={styles.conatinerInput(height, paddingHorizontal, paddingRight)}
        disabled={disabled}
        onPress={onPress}>
        <TextInput
          style={styles.input(colorText, fontSize, fontFamily, widthInput)}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={colors.text.placeholder}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={5}
          maxLength={maxLength}
          editable={false}
        />
        {suffixComponent && suffixComponent}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.conatinerInput(height, paddingHorizontal)}>
      <TextInput
        style={styles.input(colorText, fontSize, fontFamily, widthInput)}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.text.placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={5}
        maxLength={maxLength}
      />
      {suffixComponent && suffixComponent}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  conatinerInput: (height, paddingHorizontal, paddingRight) => ({
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: height ? height : hp(6),
    borderRadius: wp(4.8),
    borderColor: colors.border.primay,
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(3.6),
    paddingRight: paddingRight,
  }),
  input: (colorText, fontSize, fontFamily, widthInput) => ({
    fontSize: fontSize ? fontSize : rf(2),
    fontFamily: fontFamily ? fontFamily : fonts.MontserratRegular,
    color: colorText ? colorText : colors.text.placeholder,
    width: widthInput,
    flex: 1,
  }),
  lengthText: {
    fontSize: rf(1.5),
    fontFamily: fonts.MontserratBold,
    color: colors.text.silver,
    top: hp(1),
  },
});
