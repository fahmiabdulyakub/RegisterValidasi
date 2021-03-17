import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICEye, ICEyeClose} from '../../assets';
import {Gap, HeaderTextBack, Input, NumberStep} from '../../components';
import {colors, fonts, hp, rf, wp} from '../../constants';

const CreateAccount = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderTextBack
        label={'Create Account'}
        onPressBack={() => navigation.goBack()}
      />
      <NumberStep />
      <Gap height={hp(3)} />
      <View style={styles.container}>
        <Text style={styles.title}>Create Password</Text>
        <Text style={styles.text}>
          Password will to used to login to account
        </Text>
        <Gap height={hp(3)} />
        <Input
          placeholder={'Email'}
          fontSize={rf(1.8)}
          fontFamily={fonts.MontserratMedium}
          placeholderColor={colors.text.grayMuda}
          colorText={colors.text.grayMuda}
          backgroundColor={colors.bg.white}
          icon={<ICEye />}
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.blue3,
    flex: 1,
  },
  text: {
    fontFamily: fonts.MontserratMedium,
    fontSize: rf(1.8),
    color: colors.text.white,
  },
  title: {
    fontFamily: fonts.MontserratBold,
    fontSize: rf(2.3),
    color: colors.text.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
});
