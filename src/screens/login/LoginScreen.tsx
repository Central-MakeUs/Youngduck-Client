import LoginContainer from '@/components/container/loginContainer';
import KakaoLogin from '@/components/button/kakaoLogin';
import {Image, Text, View} from 'react-native';
import loginScreenStyles from '@/screens/login/LoginScreen.style';
import {defaultImages} from '@/assets';

function LoginScreen() {
  return (
    <LoginContainer>
      <View style={loginScreenStyles.wrapper}>
        <Text style={loginScreenStyles.description}>
          {`영잘알들의
영화교류 플랫폼`}
        </Text>
        <Image source={defaultImages.popCornMate} />
      </View>
      <View style={loginScreenStyles.wrapper}>
        <KakaoLogin />
        <KakaoLogin />
      </View>
    </LoginContainer>
  );
}

export default LoginScreen;
