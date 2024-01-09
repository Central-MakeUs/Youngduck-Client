import palette from '@/styles/colors';
import {useEffect, useState} from 'react';
import {Animated, Easing, StyleSheet, Pressable} from 'react-native';

type Props = {
  onPress: () => void;
  isOn: boolean;
};

const Switch = ({onPress, isOn}: Props) => {
  const [animatedValue] = useState(new Animated.Value(isOn ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 19],
  });

  const color = isOn ? palette.Primary.Normal : palette.Fill.Normal;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.toggleContainer, {backgroundColor: color}]}>
      <Animated.View
        style={[
          styles.toggleWheel,
          {
            transform: [{translateX}],
          },
        ]}
      />
    </Pressable>
  );
};

export default Switch;

const styles = StyleSheet.create({
  toggleContainer: {
    width: 40,
    height: 24,
    borderRadius: 99,
    justifyContent: 'center',
  },
  toggleWheel: {
    width: 16,
    height: 16,
    backgroundColor: palette.Another.White,
    borderRadius: 99,
  },
});
