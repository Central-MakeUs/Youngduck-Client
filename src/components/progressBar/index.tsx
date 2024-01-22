import {useEffect} from 'react';
import {Animated, View} from 'react-native';
import {progressBarStyles} from './ProgressBar.style';

interface IProgressBarProps {
  animatedValue: Animated.Value;
  totalScreens: number;
}

const ProgressBar = ({animatedValue, totalScreens}: IProgressBarProps) => {
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 100 / totalScreens,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  const width = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={progressBarStyles.progressBarContainer}>
      <Animated.View style={[progressBarStyles.progressBar, {width}]} />
    </View>
  );
};

export default ProgressBar;
