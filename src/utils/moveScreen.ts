import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import {getScreenSize} from './getScreenSize';
import {RefObject} from 'react';

interface IMoveScreenProps {
  scrollViewRef: RefObject<ScrollView>;
  animatedValue: Animated.Value;
  currentScreen: number;
  setCurrentScreen: React.Dispatch<React.SetStateAction<number>>;

  totalScreens: number;
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

  currentScreen === totalScreens - 2 && !isPrevious
    ? scrollViewRef?.current?.scrollToEnd({animated: true})
    : scrollViewRef?.current?.scrollTo({
        x: isPrevious ? -screenWidth : screenWidth,
        animated: true,
      });
  console.log(totalScreens, currentScreen);
  setCurrentScreen(isPrevious ? currentScreen - 1 : currentScreen + 1);

  // 2 -> 3으로 이동 안되는 현상 수정하기
  Animated.timing(animatedValue, {
    toValue:
      100 *
      ((1 +
        (totalScreens + 1) *
          (isPrevious ? currentScreen - 1 : currentScreen + 1)) /
        Math.pow(totalScreens, 2)),
    duration: isPrevious
      ? (currentScreen + 1) * 500
      : (currentScreen + 3) * 500,
    useNativeDriver: false,
  }).start();
};

export default moveScreen;
