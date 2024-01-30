import ProgressBar from '@/components/progressBar';
import BackCancelTopBar from '@/components/topBar/backCancelTopBar';
import moveScreen from '@/utils/moveScreen';
import {useRef, useState} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import writeReviewScreenStyles from './WriteReviewScreen.style';
import useNavigator from '@/hooks/useNavigator';
import ReviewTarget from './reviewTarget';
import StartReview from './startReview';
import MultiButton from '@/components/buttons/multibutton';
import SelectReview from './selectReview';
import SubTitleDescription from '@/components/title/subTitleDescription';
import TextArea from '@/components/inputs/textArea';
import CheckBox from '@/components/checkBox';
import BoxButton from '@/components/buttons/boxButton';
import {ScreenRouteProp} from '@/types/navigator';
import stackScreens from '@/constants/stackScreens';
import useMovieReviewMutation from '@/hooks/mutaions/useMovieReviewMutation';

interface IWriteReviewScreenProps {
  route: ScreenRouteProp<stackScreens.WriteReviewScreen>;
}

function WriteReviewScreen({route: {params}}: IWriteReviewScreenProps) {
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const {movieReviewMutate} = useMovieReviewMutation();
  const [startReview, setStartReview] = useState<{
    [key: string]: boolean | undefined;
  }>({
    hasWatched: undefined,
    beforeScreening: undefined,
    afterScreening: undefined,
  });
  const [positiveReview, setPositiveReview] = useState<{
    [key: string]: boolean;
  }>({
    // 연출
    cineMaster: false,
    greatFilming: false,
    pom: false,
    animationIsGood: false,
    // 미술
    artIsGood: false,
    setIsArt: false,
    custom: false,
    // 음악
    music: false,
    ost: false,
    // 내용
    writtenByGod: false,
    topicIsGood: false,
    linesAreGood: false,
    endingIsGood: false,
    // 배우
    castingIsGood: false,
    actingIsGood: false,
    chemistryIsGood: false,
  });

  const [negativeReview, setNegativeReview] = useState<{
    [key: string]: boolean;
  }>({
    // 연출
    iffy: false,
    badEditing: false,
    badAngle: false,
    // 미술
    badDetail: false,
    badColor: false,
    badCustom: false,
    // 음악
    badMusic: false,
    badSound: false,
    // 내용
    badEnding: false,
    endingLoose: false,
    noDetail: false,
    badTopic: false,
    // 배우
    badActing: false,
    badCasting: false,
  });
  const [moreReview, setMoreReview] = useState<string>('');

  const scrollViewRef = useRef<ScrollView>(null);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const {stackNavigation} = useNavigator();

  const reviewAllSelceted =
    startReview.hasWatched !== undefined &&
    startReview.beforeScreening !== undefined &&
    startReview.afterScreening !== undefined;

  const isSelectedPositive = startReview.afterScreening;
  const essentialSelected = isSelectedPositive
    ? Object.values(positiveReview).some(value => value === true)
    : Object.values(negativeReview).some(value => value === true);

  const body = {
    hasWatched: startReview.hasWatched!,
    beforeScreening: startReview.beforeScreening!,
    afterScreening: startReview.afterScreening!,
    review: moreReview,
    hasAgreed: isAgree,
    popcornPositive: positiveReview,
    popcornNegative: negativeReview,
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

  const inputMoreReview = (e: string) => setMoreReview(e);

  const toggleIsAgreeState = () => setIsAgree(!isAgree);
  const onClickCompleteReview = () => {
    stackNavigation.goBack();
    movieReviewMutate({popcornId: params.id, body});
  };
  return (
    <View style={writeReviewScreenStyles.container}>
      <BackCancelTopBar onPress={goBackOrPreviousScreen} text="리뷰 작성하기" />
      <View>
        <ProgressBar totalScreens={4} animatedValue={animatedValue} />
      </View>
      <ReviewTarget
        imageURI={params.poster}
        title={params.title}
        director={params.directorname}
      />
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        <View style={writeReviewScreenStyles.commonContainer}>
          <StartReview
            startReview={startReview}
            setStartReview={setStartReview}
          />
          <MultiButton
            leftButtonText="이전"
            rightButtonText="다음"
            onLeftButtonPress={goBackOrPreviousScreen}
            onRightButtonPress={nextScreen}
            disabled={!reviewAllSelceted}
          />
        </View>
        <View style={writeReviewScreenStyles.commonContainer}>
          <SelectReview
            review={isSelectedPositive ? positiveReview : negativeReview}
            setReview={
              isSelectedPositive ? setPositiveReview : setNegativeReview
            }
            isSelectedPositive={isSelectedPositive!}
            screenNumber={1}
            onLeftButtonPress={goBackOrPreviousScreen}
            onRightButtonPress={nextScreen}
            disabled={!essentialSelected}
          />
        </View>
        <View style={writeReviewScreenStyles.commonContainer}>
          <SelectReview
            review={isSelectedPositive ? negativeReview : positiveReview}
            setReview={
              isSelectedPositive ? setNegativeReview : setPositiveReview
            }
            isSelectedPositive={!isSelectedPositive}
            screenNumber={2}
            onLeftButtonPress={goBackOrPreviousScreen}
            onRightButtonPress={nextScreen}
          />
        </View>
        <View style={writeReviewScreenStyles.commonContainer}>
          <SubTitleDescription
            text="더 적고 싶은 후기가 있다면 적어주세요"
            subTitle="키워드 후기가 아쉽다면 추가적으로 적어주세요."
            mb={16}
          />
          <TextArea
            value={moreReview}
            onChangeInput={inputMoreReview}
            maxLength={300}
            placeholder={'300자 이하 입력 가능해요'}
            height={144}
            title="영화 후기"
          />
          <View style={writeReviewScreenStyles.agreementWrap}>
            <SubTitleDescription
              text="게시글 정책을 확인했어요."
              subTitle="팝콘작 추천하기는 수정이나 삭제를 할 수 없어요."
            />
            <View style={writeReviewScreenStyles.paddingCheckBox}>
              <CheckBox
                state={isAgree ? 'on' : 'off'}
                onPress={toggleIsAgreeState}
              />
            </View>
          </View>
          <View
            style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 40}}>
            <BoxButton onPress={onClickCompleteReview} disabled={!isAgree}>
              리뷰 작성하기
            </BoxButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default WriteReviewScreen;
