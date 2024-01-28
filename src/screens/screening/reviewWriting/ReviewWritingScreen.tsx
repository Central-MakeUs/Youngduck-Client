import {useRef, useState} from 'react';
import {Animated, ScrollView, View} from 'react-native';

import ProgressBar from '@/components/progressBar';
import BackCancelTopBar from '@/components/topBar/backCancelTopBar';
import FirstReview from './tabs/firstReview';
import EndReview from './tabs/endReview';
import useNavigator from '@/hooks/useNavigator';
import moveScreen from '@/utils/moveScreen';
import SelectReview from './tabs/selectReview';

const ReviewWritingScreen = () => {
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const {stackNavigation} = useNavigator();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  // 백엔드 api body 통신 => TODO: 타입 추가
  const [inputValues, setInputValues] = useState({
    positive: {
      // 연출
      cineMaster: false,
      greatFilming: false,
      pom: false,
      animationIsGood: false,
      // 미술
      artIsGood: false,
      custom: false,
      // 음악
      music: false,
      // 내용
      topicIsGood: false,
      linesAreGood: false,
      endingIsGood: false,
      // 배우
      castingIsGood: false,
      actingIsGood: false,
      chemistryIsGood: false,
    },
    negative: {
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
    },
    afterScreening: undefined,
    screeningReview: undefined,
    locationReview: undefined,
    serviceReview: undefined,
    review: '',
    hasAgreed: false,
  });

  const reviewPositive = {...inputValues.positive};
  const reviewNegative = {...inputValues.negative};

  const onChangePositive = (value: boolean, option: string) => {
    const updatePositive = {...reviewPositive, [option]: value};
    setInputValues({...inputValues, positive: updatePositive});
  };

  const onChangeNegative = (value: boolean, option: string) => {
    const updateNegative = {...reviewNegative, [option]: value};
    setInputValues({...inputValues, negative: updateNegative});
  };

  const onChangeOption = (value: boolean | string, option: string) => {
    setInputValues({...inputValues, [option]: value});
  };

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
        <FirstReview
          goNext={nextScreen}
          goPrevious={goBackOrPreviousScreen}
          review={inputValues}
          setValue={(value, option) => onChangeOption(value, option)}
        />
        <SelectReview
          setValue={(value, option) => onChangePositive(value, option)}
          review={reviewPositive}
          goNext={nextScreen}
          goPrevious={goBackOrPreviousScreen}
          type="positive"
        />
        <SelectReview
          setValue={(value, option) => onChangeNegative(value, option)}
          review={reviewNegative}
          goNext={nextScreen}
          goPrevious={goBackOrPreviousScreen}
          type="negative"
        />
        <EndReview
          value={inputValues}
          setValue={(value, option) => onChangeOption(value, option)}
        />
      </ScrollView>
    </View>
  );
};
export default ReviewWritingScreen;
