import {useEffect} from 'react';
import {Animated, View} from 'react-native';
import {progressBarStyles} from './ProgressBar.style';

const ProgressBar = ({
  animatedValue,
  totalScreens,
}: {
  animatedValue: Animated.Value;
  totalScreens: number;
}) => {
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 100 * (1 / Math.pow(totalScreens, 2)),
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  const width = animatedValue.interpolate({
    inputRange: [0, totalScreens * 100],
    outputRange: ['0%', `${totalScreens * 100}%`],
    extrapolate: 'clamp',
  });

  return (
    <View style={progressBarStyles.progressBarContainer}>
      <Animated.View style={[progressBarStyles.progressBar, {width}]} />
    </View>
  );
};

export default ProgressBar;
