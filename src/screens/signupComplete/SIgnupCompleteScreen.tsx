import {useSafeAreaInsets} from 'react-native-safe-area-context';
import signupCompleteScreenContainerStyles from './SignupCompleteScreen.style';
import {getScreenSize} from '@/utils/getScreenSize';
import {Image, View} from 'react-native';
import {defaultImages} from '@/assets';
import SubTitleDescription from '@/components/title/subTitleDescription';
import BoxButton from '@/components/buttons/boxButton';
import PopcornSignup from '@/assets/icons/popcorn-signup.svg';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';

const SignupCompleteScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {screenWidth, screenHeight} = getScreenSize();
  const styles = signupCompleteScreenContainerStyles({
    top,
    bottom,
    width: screenWidth,
    height: screenHeight,
  });
  const {stackNavigation} = useNavigator();

  const startPopcornMate = async () => {
    stackNavigation.reset({
      routes: [{name: stackScreens.BottomTabScreens}],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.pacongWrap}>
        <Image source={defaultImages.pacong} style={styles.pacong} />
      </View>
      <View style={styles.image}>
        <PopcornSignup width={screenWidth} height={screenHeight} />
      </View>
      <View style={styles.innerWrap}>
        <SubTitleDescription
          text="회원가입이 끝났습니다!"
          subTitle="팝콘메이트에 오신걸 환영합니다!"
        />
        <BoxButton onPress={startPopcornMate}>팝콘메이트 시작하기</BoxButton>
      </View>
    </View>
  );
};

export default SignupCompleteScreen;
