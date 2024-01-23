import KakaoLogin from '@/components/auth/kakao';
import {Image, Platform, Text, View} from 'react-native';
import loginScreenStyles from '@/screens/login/LoginScreen.style';
import {defaultImages} from '@/assets';
import AppleLogin from '@/components/auth/apple';
import GradientContainer from '@/components/container/gradientContainer';
import {getScreenSize} from '@/utils/getScreenSize';

function LoginScreen() {
  const platform = Platform.OS;
  const {screenWidth: width, screenHeight: height} = getScreenSize();

  const style = loginScreenStyles({width, height});

  return (
    <GradientContainer colors={['rgba(255,240,143,1)', 'rgba(255,246,189,1)']}>
      <Image source={defaultImages.loginPopcorn} style={style.image} />
      <View style={style.wrapper}>
        <Text style={style.description}>{`영잘알들의\n영화교류 플랫폼`}</Text>
        <Image source={defaultImages.popCornMate} />
      </View>
      <View style={style.wrapper}>
        <KakaoLogin />
        {platform === 'ios' && <AppleLogin />}
      </View>
    </GradientContainer>
  );
}

export default LoginScreen;
