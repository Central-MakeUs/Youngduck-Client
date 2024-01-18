import LoginContainer from '@/components/container/loginContainer';
import KakaoLogin from '@/components/auth/kakao';

import {Image, Platform, Pressable, Text, View} from 'react-native';
import loginScreenStyles from '@/screens/login/LoginScreen.style';
import {defaultImages} from '@/assets';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import AppleLogin from '@/components/auth/apple';

function LoginScreen() {
  const {stackNavigation} = useNavigator();
  const platform = Platform.OS;

  return (
    <LoginContainer>
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
      <Pressable
        onPress={() => stackNavigation.navigate(stackScreens.SignupScreen)}>
        <Text>SignupScreen</Text>
      </Pressable>
    </LoginContainer>
  );
}

export default LoginScreen;
