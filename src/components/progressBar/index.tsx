import {useEffect} from 'react';
import {Animated, View} from 'react-native';
import {progressBarStyles} from './ProgressBar.style';

const ProgressBar = ({animatedValue}: {animatedValue: Animated.Value}) => {
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 25,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  const width = animatedValue.interpolate({
    inputRange: [0, 200],
    outputRange: ['0%', '200%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={progressBarStyles.progressBarContainer}>
      <Animated.View style={[progressBarStyles.progressBar, {width}]} />
    </View>
  );
};

export default ProgressBar;
