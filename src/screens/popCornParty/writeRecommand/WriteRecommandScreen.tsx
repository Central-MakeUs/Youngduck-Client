import CheckBox from '@/components/checkBox';
import DefaultContainer from '@/components/container/defaultContainer';
import ButtonInput from '@/components/inputs/buttonInput';
import TextArea from '@/components/inputs/textArea';
import SubTitleDescription from '@/components/title/subTitleDescription';
import getVoteDateRange from '@/utils/getVoteDateRange';
import {useRef, useState} from 'react';
import {
  Animated,
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import writeRecommandScreenStyles from './WriteRecommandScreen.style';
import BoxButton from '@/components/buttons/boxButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useNavigator from '@/hooks/useNavigator';
import Popup from '@/components/popup';
import BackTopBar from '@/components/topBar/backTopBar';
import ProgressBar from '@/components/progressBar';
import signupScreenStyles from '@/screens/signup/SignupScreen.style';
import Typography from '@/components/typography';
import moveScreen from '@/utils/moveScreen';

function WriteRecommandScreen() {
  // const [selectedMovie, setSelectedMovie] = useState<string>('');
  // const [reason, setReason] = useState<string>('');
  // const [isAgree, setIsAgree] = useState<boolean>(false);
  // const [isVisible, setIsVisible] = useState<boolean>(false);

  // const {bottom} = useSafeAreaInsets();
  // const {startDate, endDate} = getVoteDateRange();
  const {stackNavigation} = useNavigator();

  // const styles = writeRecommandScreenStyles({bottom});
  // const canRegister = !!selectedMovie.length && reason.length >= 10 && isAgree;

  // const inputReason = (e: string) => setReason(e);

  // const toggleIsAgreeState = () => setIsAgree(!isAgree);
  // const toggleIsVisibleState = () => setIsVisible(!isVisible);

  // const goToRecommandListScreen = () => {
  //   // 추후 API 요청 로직 추가
  //   stackNavigation.popToTop();
  // };

  const scrollViewRef = useRef<ScrollView>(null);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const [currentScreen, setCurrentScreen] = useState<number>(0);

  const handleMoveScreen = ({status}: {status: 'next' | 'previous'}) => {
    moveScreen({
      scrollViewRef,
      animatedValue,
      currentScreen,
      setCurrentScreen,
      status,
      totalScreens: 3,
    });
  };
  return (
    // <DefaultContainer>
    //   <Pressable style={styles.container} onPress={Keyboard.dismiss}>
    //     <SubTitleDescription
    //       text="다음 주의 팝콘작을 추천해 주세요"
    //       subTitle={`추천하신 영화는 ${startDate}부터\n${endDate}의 팝콘작 후보로 게시됩니다.`}
    //       mt={24}
    //       mb={32}
    //     />
    //     <View style={styles.buttonMargin}>
    //       <ButtonInput
    //         value={selectedMovie}
    //         placeholder="클릭하면 영화를 검색할 수 있어요"
    //         title="추천 영화"
    //         category="search"
    //         setValue={setSelectedMovie}
    //         essential
    //       />
    //     </View>
    //     <TextArea
    //       value={reason}
    //       onChangeInput={inputReason}
    //       maxLength={100}
    //       placeholder={'최소 10자에서 최대 100자까지 입력할 수 있어요'}
    //       height={144}
    //       title="추천하는 이유"
    //       essential
    //     />
    //     <View style={styles.agreementWrap}>
    //       <SubTitleDescription
    //         text="게시글 정책을 확인했어요."
    //         subTitle="팝콘작 추천하기는 수정이나 삭제를 할 수 없어요."
    //       />
    //       <View style={styles.paddingCheckBox}>
    //         <CheckBox
    //           state={isAgree ? 'on' : 'off'}
    //           onPress={toggleIsAgreeState}
    //         />
    //       </View>
    //     </View>
    //     <View style={styles.registerButton}>
    //       <BoxButton disabled={!canRegister} onPress={toggleIsVisibleState}>
    //         등록하기
    //       </BoxButton>
    //     </View>
    //   </Pressable>
    //   <Popup
    //     title="등록하시겠습니까?"
    //     content="등록 후에는 수정할 수 없어요"
    //     isVisible={isVisible}
    //     onClose={toggleIsVisibleState}
    //     onPress={goToRecommandListScreen}
    //   />
    // </DefaultContainer>
    <SafeAreaView style={signupScreenStyles.container}>
      <BackTopBar
        onPress={() =>
          currentScreen
            ? handleMoveScreen({status: 'previous'})
            : stackNavigation.goBack()
        }
      />
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        <ProgressBar totalScreens={3} animatedValue={animatedValue} />
        <View style={signupScreenStyles.commonContainer}>
          <Typography style="Title1">1</Typography>
          <BoxButton onPress={() => handleMoveScreen({status: 'next'})}>
            다음
          </BoxButton>
        </View>
        <View style={signupScreenStyles.commonContainer}>
          <Typography style="Title1">2</Typography>
          <BoxButton onPress={() => handleMoveScreen({status: 'next'})}>
            다음
          </BoxButton>
        </View>
        <View style={signupScreenStyles.commonContainer}>
          <Typography style="Title1">3</Typography>
          <BoxButton onPress={() => handleMoveScreen({status: 'next'})}>
            다음
          </BoxButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default WriteRecommandScreen;
