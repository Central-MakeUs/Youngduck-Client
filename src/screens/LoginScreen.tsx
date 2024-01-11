import LoginContainer from '@/components/login/loginContainer/LoginContainer';
import KakaoLogin from '@/components/login/kakaoLogin/KakaoLogin';
import {Image, Text, View} from 'react-native';
import loginScreenStyles from '@/components/login/LoginScreen.style';

function LoginScreen() {
  return (
    <LoginContainer>
      <View style={loginScreenStyles.wrapper}>
        <Text style={loginScreenStyles.description}>
          {`영잘알들의
영화교류 플랫폼`}
        </Text>
        <Image source={require('@/assets/popcornmate.png')} />
      </View>
      <View style={loginScreenStyles.wrapper}>
        <KakaoLogin />
        <KakaoLogin />
      </View>
    </LoginContainer>
  );
}

export default LoginScreen;
