import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICEye, ICEyeClose} from '../../assets';
import {
  Button,
  Gap,
  HeaderTextBack,
  Input,
  NumberStep,
  Circle,
} from '../../components';
import {colors, fonts, hp, rf, wp} from '../../constants';
import {regex} from '../../utils/regex';

const CreateAccount = ({navigation}) => {
  const [show, setShow] = useState(true);
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const showPassword = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const onChangeText = value => {
    if (regex.lowercase.test(value) === true) {
      setLower(true);
    } else {
      setLower(false);
    }
    if (regex.uppercase.test(value) === true) {
      setUpper(true);
    } else {
      setUpper(false);
    }
    if (regex.number.test(value) === true) {
      setNumber(true);
    } else {
      setNumber(false);
    }
    if (regex.character.test(value) === true) {
      setCharacter(true);
    } else {
      setCharacter(false);
    }

    if (value.length === 0) {
      setUpper(false);
      setNumber(false);
      setCharacter(false);
      setLower(false);
    }
  };
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
          placeholder={'Password'}
          fontSize={rf(1.8)}
          onChangeText={value => onChangeText(value)}
          fontFamily={fonts.MontserratMedium}
          placeholderColor={colors.text.grayMuda}
          colorText={colors.text.grayMuda}
          backgroundColor={colors.bg.white}
          icon={show ? <ICEyeClose /> : <ICEye />}
          onPress={() => showPassword()}
          secureTextEntry={show ? true : false}
        />
        <Gap height={hp(3)} />
        <View style={styles.complex}>
          <Text style={styles.text}>Complexity : </Text>
          {upper && lower && number && character && (
            <Text style={styles.textComplex}>Very Weak</Text>
          )}
        </View>

        <Gap height={hp(3)} />
        <View style={styles.row}>
          <View style={styles.column}>
            {lower ? <Circle /> : <Text style={styles.textBig}>a</Text>}
            <Text style={styles.textMedium}>LowerCase</Text>
          </View>
          <View style={styles.column}>
            {upper ? <Circle /> : <Text style={styles.textBig}>A</Text>}
            <Text style={styles.textMedium}>Uppercase</Text>
          </View>
          <View style={styles.column}>
            {number ? <Circle /> : <Text style={styles.textBig}>123</Text>}
            <Text style={styles.textMedium}>Number</Text>
          </View>
          <View style={styles.column}>
            {character ? <Circle /> : <Text style={styles.textBig}>9+</Text>}
            <Text style={styles.textMedium}>Characters</Text>
          </View>
        </View>
      </View>
      <Button
        buttonColor={
          upper && lower && number && character ? colors.bg.blue : colors.bg.abu
        }
        textColor={colors.text.white}
        paddingVertical={hp(2)}
        marginHorizontal={wp(5)}
        borderRadius={wp(2)}
        disabled={upper && lower && number && character ? false : true}
        bottom={hp(3)}
        title={'Next'}
        onPress={() => navigation.navigate('CreateAccount')}
      />
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
  textComplex: {
    fontFamily: fonts.MontserratExtraBold,
    fontSize: rf(1.8),
    color: colors.text.yello,
  },
  textMedium: {
    fontFamily: fonts.MontserratMedium,
    fontSize: rf(1.5),
    color: colors.text.white,
  },
  textBig: {
    fontFamily: fonts.MontserratMedium,
    fontSize: rf(4),
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
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
  },
  complex: {
    flexDirection: 'row',
  },
  column: {
    alignItems: 'center',
  },
});
