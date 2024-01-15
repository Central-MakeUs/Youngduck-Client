import {useSafeAreaInsets} from 'react-native-safe-area-context';
import signupCompleteScreenContainerStyles from './SignupCompleteScreen.style';
import {getScreenSize} from '@/utils/getScreenSize';
import {Image, View} from 'react-native';
import {defaultImages} from '@/assets';
import CancelTopBar from '@/components/topBar/cancelTopBar';
import SubTitleDescription from '@/components/title/subTitleDescription';
import useNavigator from '@/hooks/useNavigator';
import BoxButton from '@/components/buttons/boxButton';

const SignupCompleteScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {screenWidth: width, screenHeight: height} = getScreenSize();
  const style = signupCompleteScreenContainerStyles({
    top,
    bottom,
    width,
    height,
  });
  const {stackNavigation} = useNavigator();

  return (
    <View style={style.container}>
      <View style={style.pacongWrap}>
        <Image source={defaultImages.pacong} style={style.pacong} />
      </View>
      <Image source={defaultImages.completeSignupPopcorn} style={style.image} />
      <CancelTopBar onPress={() => stackNavigation.popToTop()} text="" />
      <View style={style.innerWrap}>
        <SubTitleDescription
          text="회원가입이 끝났습니다!"
          subTitle="팝콘메이트에 오신걸 환영합니다!"
        />
        <BoxButton onPress={() => stackNavigation.popToTop()}>
          팝콘메이트 시작하기
        </BoxButton>
      </View>
    </View>
  );
};

export default SignupCompleteScreen;
