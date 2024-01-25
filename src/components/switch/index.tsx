import palette from '@/styles/theme/color';
import {useEffect, useState} from 'react';
import {Animated, Easing, Pressable} from 'react-native';
import {switchStyles} from './Switch.style';
import {CommonMarginVerticalProps} from '@/types/ui';

interface ISwitchProps extends CommonMarginVerticalProps {
  onPress: () => void;
  isOn: boolean;
}

const Switch = ({onPress, isOn, mt, mb}: ISwitchProps) => {
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
      style={{
        ...switchStyles.toggleContainer,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
        backgroundColor: color,
      }}>
      <Animated.View
        style={[
          switchStyles.toggleWheel,
          {
            transform: [{translateX}],
          },
        ]}
      />
    </Pressable>
  );
};

export default Switch;
