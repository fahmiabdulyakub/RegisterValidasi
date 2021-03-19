import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import {ICCalender} from '../../assets';
import {keyframes, stagger} from 'popmotion';
import {Button, Gap, HeaderTextBack, NumberStep} from '../../components';
import {colors, fonts, hp, rf, wp} from '../../constants';
const COUNT = 1;
const DURATION = 1000;
const initialphase = {scale: 0, opacity: 1};
const constructAnimations = () =>
  [...Array(COUNT).keys()].map(() => initialphase);

const Schedule = ({navigation}) => {
  const [animations, setAnimations] = useState(constructAnimations);
  const [calender, setCalender] = useState(false);
  useEffect(() => {
    if (calender === false) {
      animateCircles();
    }
  }, [calender]);

  const animateCircles = () => {
    const keyframess = Array(COUNT).fill(
      keyframes({
        values: [initialphase, {scale: 1, opacity: 0.5}],
        duration: DURATION,
        loop: Infinity,
        yoyo: Infinity,
      }),
    );
    stagger(keyframess, DURATION / COUNT).start(animationss => {
      setAnimations(animationss);
    });
  };
  return (
    <View style={styles.page}>
      <HeaderTextBack
        label={'Create Account'}
        onPressBack={() => navigation.goBack()}
      />
      <NumberStep step1={true} step2={true} />
      <Gap height={hp(1)} />
      <View style={styles.container}>
        {animations.map(({opacity, scale}, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.circle,
                {
                  transform: [{scale}],
                  opacity,
                },
              ]}
            />
          );
        })}
        <TouchableOpacity style={styles.midCircle}>
          {<ICCalender />}
        </TouchableOpacity>
        <Gap height={hp(14)} />
        <Text style={styles.title}>Schedule Video Call</Text>
        <Gap height={hp(1)} />
        <Text style={styles.text}>
          Choose the date and time that you preferred, we will send a link via
          email to make a video call on the scheduled date and time{' '}
        </Text>
      </View>
      <Button
        buttonColor={colors.bg.blue}
        textColor={colors.text.white}
        paddingVertical={hp(2)}
        marginHorizontal={wp(5)}
        borderRadius={wp(2)}
        bottom={hp(3)}
        title={'Next'}
      />
    </View>
  );
};

const getCircle = (radius, backgroundColor = colors.bg.white) => ({
  backgroundColor,
  width: radius * 2,
  height: radius * 2,
  borderRadius: radius,
  position: 'absolute',
  left: wp(3),
});

export default Schedule;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.blue3,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  circle: getCircle(wp(10)),
  midCircle: {
    ...getCircle(wp(5)),
    alignItems: 'center',
    justifyContent: 'center',
    left: wp(8),
    top: hp(2.4),
  },
  title: {
    fontFamily: fonts.MontserratBold,
    fontSize: rf(2.3),
    color: colors.text.white,
  },
  text: {
    fontFamily: fonts.MontserratMedium,
    fontSize: rf(1.8),
    color: colors.text.white,
  },
});
