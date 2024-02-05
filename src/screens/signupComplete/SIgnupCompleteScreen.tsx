import {useSafeAreaInsets} from 'react-native-safe-area-context';
import signupCompleteScreenContainerStyles from './SignupCompleteScreen.style';
import {getScreenSize} from '@/utils/getScreenSize';
import {Image, View} from 'react-native';
import {defaultImages} from '@/assets';
import SubTitleDescription from '@/components/title/subTitleDescription';
import BoxButton from '@/components/buttons/boxButton';
import useUserMutation from '@/hooks/mutaions/useUserMutation';
import {useUserStore} from '@/stores/user';

const SignupCompleteScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {screenWidth: width, screenHeight: height} = getScreenSize();
  const style = signupCompleteScreenContainerStyles({
    top,
    bottom,
    width,
    height,
  });
  const {loginMutate} = useUserMutation();
  const {user, idToken} = useUserStore();

  const startPopcornMate = async () =>
    loginMutate({type: user.type, token: idToken});

  return (
    <View style={style.container}>
      <View style={style.pacongWrap}>
        <Image source={defaultImages.pacong} style={style.pacong} />
      </View>
      <Image source={defaultImages.completeSignupPopcorn} style={style.image} />
      <View style={style.innerWrap}>
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
