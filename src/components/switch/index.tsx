import {useEffect, useState} from 'react';
import {TouchableOpacity, Animated, Easing, StyleSheet} from 'react-native';

type Props = {
  setToggle: () => void;
  isOn: boolean;
};

const Switch = ({setToggle, isOn}: Props) => {
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

  const color = isOn ? '#FFCC00' : '#EBEBEA';

  return (
    <TouchableOpacity
      onPress={setToggle}
      style={[styles.toggleContainer, {backgroundColor: color}]}>
      <Animated.View
        style={[
          styles.toggleWheel,
          {
            transform: [{translateX}],
          },
        ]}
      />
    </TouchableOpacity>
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
    backgroundColor: 'white',
    borderRadius: 99,
  },
});
