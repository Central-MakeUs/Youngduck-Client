import {getKakaoProfile} from '@/apis/social';
import {postLoginUser} from '@/apis/user';
import * as Kakao from '@react-native-seoul/kakao-login';

import LoginContainer from '@/components/container/loginContainer';
import KakaoLogin from '@/components/buttons/kakaoLogin';

import {Image, Pressable, Text, View} from 'react-native';
import loginScreenStyles from '@/screens/login/LoginScreen.style';
import {defaultImages} from '@/assets';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import AppleLogin from '@/components/auth/apple';

function LoginScreen() {
  const {stackNavigation} = useNavigator();
  // 카카오 로그인 함수
  const handleSignInKakao = async (): Promise<void> => {
    Kakao.login()
      .then(async result => {
        const idToken = result.idToken;
        const res = postLoginUser('KAKAO', idToken);
        console.log('로그인 응답', res);
        getKakaoProfile();
      })
      .catch(error => {
        if (error.code === 'E_CANCELLED_OPERATION') {
          console.log('Login Cancel', error.message);
        } else {
          console.log(`Login Fail(code:${error.code})`, error.message);
        }
      });
    // 일단 로그인 후 홈으로 이동
    stackNavigation.navigate('BottomTabScreens');
  };
  return (
    <LoginContainer>
      <View style={loginScreenStyles.wrapper}>
        <Text style={loginScreenStyles.description}>
          {`영잘알들의\n영화교류 플랫폼`}
        </Text>
        <Image source={defaultImages.popCornMate} />
      </View>
      <View style={loginScreenStyles.wrapper}>
        <KakaoLogin onPress={handleSignInKakao} />
        <AppleLogin />
      </View>
      <Pressable
        onPress={() => stackNavigation.navigate(stackScreens.SignupScreen)}>
        <Text>SignupScreen</Text>
      </Pressable>
    </LoginContainer>
  );
}

export default LoginScreen;
