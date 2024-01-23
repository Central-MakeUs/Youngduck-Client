import KakaoLogin from '@/components/auth/kakao';
import {Image, Platform, Text, View} from 'react-native';
import loginScreenStyles from '@/screens/login/LoginScreen.style';
import {defaultImages} from '@/assets';
import AppleLogin from '@/components/auth/apple';
import GradientContainer from '@/components/container/gradientContainer';

function LoginScreen() {
  const platform = Platform.OS;

  return (
    <GradientContainer>
      <View style={loginScreenStyles.wrapper}>
        <Text style={loginScreenStyles.description}>
          {`영잘알들의\n영화교류 플랫폼`}
        </Text>
        <Image source={defaultImages.popCornMate} />
      </View>
      <View style={loginScreenStyles.wrapper}>
        <KakaoLogin />
        {platform === 'ios' && <AppleLogin />}
      </View>
    </GradientContainer>
  );
}

export default LoginScreen;
