import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTextBack, NumberStep} from '../../components';
import {colors, fonts} from '../../constants';

const CreateAccount = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderTextBack
        label={'Create Account'}
        onPressBack={() => navigation.goBack()}
      />
      <NumberStep />
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
    fontFamily: fonts.MontserratBold,
  },
});
