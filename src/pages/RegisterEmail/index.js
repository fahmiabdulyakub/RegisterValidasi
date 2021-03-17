import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {BgTop} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts} from '../../constants';
import {hp, rf, wp} from '../../constants/display';

const RegisterEmail = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.bg.blue3} />
      <Image source={BgTop} style={styles.bg} />
      <Gap height={hp(20)} />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to GIN Finans</Text>
      </View>
    </View>
  );
};

export default RegisterEmail;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.white,
    flex: 1,
  },
  text: {
    fontFamily: fonts.MontserratBold,
    color: colors.text.white,
    fontSize: rf(3),
    width: wp(50),
  },
  bg: {
    width: wp(100),
    height: hp(53),
    position: 'absolute',
  },
  container: {
    paddingHorizontal: wp(5),
  },
});
