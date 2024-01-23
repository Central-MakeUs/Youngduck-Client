import {Animated, ScrollView} from 'react-native';
import {getScreenSize} from './getScreenSize';
import {RefObject} from 'react';

interface IMoveScreenProps {
  scrollViewRef: RefObject<ScrollView>;
  animatedValue: Animated.Value;
  currentScreen: number;
  setCurrentScreen: React.Dispatch<React.SetStateAction<number>>;
  // 총 몇 개의 화면이 보여지는지 표시
  totalScreens: number;
  // 다음으로 넘어가는 상태인지 이전으로 넘어가는 상태인지 표시
  status?: 'next' | 'previous';
}

const moveScreen = ({
  scrollViewRef,
  animatedValue,
  currentScreen,
  setCurrentScreen,
  totalScreens,
  status,
}: IMoveScreenProps) => {
  const {screenWidth} = getScreenSize();

  const isPrevious = status === 'previous';
  const nextScreen = isPrevious ? currentScreen - 1 : currentScreen + 1;
  const moveValue = (100 * (nextScreen + 1)) / totalScreens;

  // status에 따라 scroll
  scrollViewRef?.current?.scrollTo({
    x: nextScreen * screenWidth,
    animated: true,
  });

  setCurrentScreen(isPrevious ? currentScreen - 1 : currentScreen + 1);

  Animated.timing(animatedValue, {
    toValue: moveValue,
    duration: 1500,
    useNativeDriver: false,
  }).start();
};

export default moveScreen;
