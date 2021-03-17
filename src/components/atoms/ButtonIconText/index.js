import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Gap} from '../../../components';
import {colors, fonts, rf, hp, wp} from '../../../constants';

const ButtonIconText = ({
  title,
  icon,
  iconRight,
  flexDirection,
  backgroundColor,
  titleColor,
  borderRadius,
  onPress,
  fontTitle,
  paddingVertical,
  paddingHorizontal,
  widthText,
  leftText,
  height,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={styles.conatiner(
        flexDirection,
        backgroundColor,
        borderRadius,
        paddingVertical,
        paddingHorizontal,
        height,
      )}
      onPress={onPress}
      disabled={disabled}>
      {icon && icon}
      <Gap width={5} />
      <Text style={styles.title(titleColor, fontTitle, widthText, leftText)}>
        {title}
      </Text>
      {iconRight && iconRight}
    </TouchableOpacity>
  );
};

export default ButtonIconText;

const styles = StyleSheet.create({
  conatiner: (
    flexDirection,
    backgroundColor,
    borderRadius,
    paddingVertical,
    paddingHorizontal,
    height,
  ) => ({
    backgroundColor: backgroundColor ? backgroundColor : colors.bg.blue,
    paddingVertical: height ? null : paddingVertical ? paddingVertical : hp(1),
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(3.6),
    height: height ? height : null,
    borderRadius: borderRadius ? borderRadius : 15,
    flexDirection: flexDirection ? flexDirection : 'row',
    alignItems: 'center',
    justifyContent: height ? 'space-between' : 'center',
  }),
  title: (titleColor, fontTitle, widthText, leftText) => ({
    fontFamily: fontTitle ? fontTitle : fonts.MontserratRegular,
    fontSize: rf(1.5),
    color: titleColor ? titleColor : colors.text.white,
    width: widthText ? widthText : null,
    left: leftText ? leftText : null,
  }),
});
