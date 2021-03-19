import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTextBack} from '../../components';
import {colors} from '../../constants';

const PersonalInformation = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderTextBack
        label={'Create Account'}
        onPressBack={() => navigation.goBack()}
      />
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.blue3,
    flex: 1,
  },
});
