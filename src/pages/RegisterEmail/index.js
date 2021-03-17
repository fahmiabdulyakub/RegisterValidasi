import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {BgTop, ICEmail} from '../../assets';
import {Button, Gap, Input, NumberStep} from '../../components';
import {colors, fonts} from '../../constants';
import {hp, rf, wp} from '../../constants/display';

const RegisterEmail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.bg.blue3} />
      <Image source={BgTop} style={styles.bg} />
      <Gap height={hp(5)} />
      <NumberStep />
      <Gap height={hp(10)} />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to GIN Finans</Text>
        <Gap height={hp(2)} />
        <Text style={styles.desc}>
          Welcome to The Bank of the Future. Manage and track your account on
          the go.
        </Text>
      </View>
      <View style={styles.container}>
        <Gap height={hp(8)} />
        <View style={styles.box}>
          <Input
            placeholder={'Email'}
            fontSize={rf(1.8)}
            fontFamily={fonts.MontserratMedium}
            placeholderColor={colors.text.grayMuda}
            colorText={colors.text.grayMuda}
            backgroundColor={colors.text.abu}
            suffixComponent={<ICEmail />}
          />
        </View>
        <Gap height={hp(7)} />
        <Button
          buttonColor={colors.bg.blue3}
          textColor={colors.text.white}
          paddingVertical={hp(2)}
          borderRadius={wp(2)}
          title={'Next'}
          onPress={() => navigation.navigate('CreateAccount')}
        />
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
    fontFamily: fonts.MontserratExtraBold,
    color: colors.text.white,
    fontSize: rf(3),
    width: wp(50),
  },
  desc: {
    fontFamily: fonts.MontserratBold,
    color: colors.text.concrete,
    fontSize: rf(1.8),
    textAlign: 'justify',
    width: wp(75),
  },
  bg: {
    width: wp(100),
    height: hp(53),
    position: 'absolute',
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  box: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    backgroundColor: colors.bg.concrete,
    borderRadius: wp(3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
