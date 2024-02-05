import KakaoLogin from '@/components/auth/kakao';

import {Platform, Text, View} from 'react-native';
import loginScreenStyles from '@/screens/login/LoginScreen.style';
import AppleLogin from '@/components/auth/apple';
import GradientContainer from '@/components/container/gradientContainer';
import {getScreenSize} from '@/utils/getScreenSize';
import LookAround from './components/lookAround';
import PopcornMateLogo from '@/assets/icons/popcorn-mate-logo.svg';
import PopcornLogin from '@/assets/icons/popcorn-login.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function LoginScreen() {
  const platform = Platform.OS;
  const {screenWidth, screenHeight} = getScreenSize();
  const {bottom} = useSafeAreaInsets();

  const styles = loginScreenStyles({bottom});

  return (
    <GradientContainer colors={['rgba(255,240,143,1)', 'rgba(255,246,189,1)']}>
      <View style={styles.container}>
        <View style={styles.image}>
          <PopcornLogin width={screenWidth} height={screenHeight} />
        </View>
        <View style={styles.wrapper}>
          <Text
            style={styles.description}>{`영잘알들의\n영화교류 플랫폼`}</Text>
          <PopcornMateLogo />
        </View>
        <View style={styles.wrapper}>
          <KakaoLogin />
          {platform === 'ios' && <AppleLogin />}
          <LookAround />
        </View>
      </View>
    </GradientContainer>
  );
}

export default LoginScreen;
