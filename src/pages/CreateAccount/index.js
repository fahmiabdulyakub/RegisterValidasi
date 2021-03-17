import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../constants';

const CreateAccount = () => {
  return (
    <View>
      <Text style={styles.text}>Create Account</Text>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.MontserratBold,
  },
});
