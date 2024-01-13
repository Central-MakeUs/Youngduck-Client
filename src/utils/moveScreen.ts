import {Animated, ScrollView} from 'react-native';
import {getScreenSize} from './getScreenSize';
import {RefObject} from 'react';

interface IMoveScreenProps {
  scrollViewRef: RefObject<ScrollView>;
  animatedValue: Animated.Value;
  currentScreen: number;
  setCurrentScreen: React.Dispatch<React.SetStateAction<number>>;
}

const moveScreen = ({
  scrollViewRef,
  animatedValue,
  currentScreen,
  setCurrentScreen,
}: IMoveScreenProps) => {
  const {screenWidth} = getScreenSize();

  scrollViewRef?.current?.scrollTo({
    x: currentScreen ? -screenWidth : screenWidth,
    animated: true,
  });
  setCurrentScreen(currentScreen ? 0 : 1);
  Animated.timing(animatedValue, {
    toValue: currentScreen ? 25 : 200,
    duration: currentScreen ? 1000 : 2000,
    useNativeDriver: false,
  }).start();
};

export default moveScreen;
