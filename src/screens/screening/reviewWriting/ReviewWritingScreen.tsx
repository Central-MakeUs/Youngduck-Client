import ProgressBar from '@/components/progressBar';
import BackCancelTopBar from '@/components/topBar/backCancelTopBar';
import useNavigator from '@/hooks/useNavigator';
import moveScreen from '@/utils/moveScreen';
import {useRef, useState} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import FirstReview from './tabs/FirstReview';
import PositiveReview from './tabs/PositiveReview';
import NegativeReview from './tabs/NegativeReview';
import EndReview from './tabs/EndReview';

const ReviewWritingScreen = () => {
  const [positive, setPositive] = useState({
    cineMaster: false,
    greatFilming: false,
    pom: false,
    animationIsGood: false,
    artIsGood: false,
    custom: false,
    music: false,
    topicIsGood: false,
    linesAreGood: false,
    endingIsGood: false,
    castingIsGood: false,
    actingIsGood: false,
    chemistryIsGood: false,
  });
  const [negative, setNegative] = useState({
    iffy: false,
    badEditing: false,
    badAngle: false,
    badDetail: false,
    badColor: false,
    badCustom: false,
    badMusic: false,
    badSound: false,
    badEnding: false,
    endingLoose: false,
    noDetail: false,
    badTopic: false,
    badActing: false,
    badCasting: false,
  });
  const [review, setReview] = useState({
    afterScreening: false,
    screeningReview: false,
    locationReview: false,
    serviceReview: false,
    review: '',
    hasAgreed: false,
  });

  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const {stackNavigation} = useNavigator();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);

  const nextScreen = () => {
    moveScreen({
      scrollViewRef,
      animatedValue,
      currentScreen,
      setCurrentScreen,
      status: 'next',
      totalScreens: 4,
    });
  };

  const goBackOrPreviousScreen = () =>
    currentScreen
      ? moveScreen({
          scrollViewRef,
          animatedValue,
          currentScreen,
          setCurrentScreen,
          status: 'previous',
          totalScreens: 4,
        })
      : stackNavigation.goBack();

  return (
    <View>
      <BackCancelTopBar onPress={goBackOrPreviousScreen} text="리뷰 작성하기" />
      <View>
        <ProgressBar totalScreens={4} animatedValue={animatedValue} />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        <FirstReview goNext={nextScreen} goPrevious={goBackOrPreviousScreen} />
        <PositiveReview
          goNext={nextScreen}
          goPrevious={goBackOrPreviousScreen}
        />
        <NegativeReview
          goNext={nextScreen}
          goPrevious={goBackOrPreviousScreen}
        />
        <EndReview />
      </ScrollView>
    </View>
  );
};
export default ReviewWritingScreen;
