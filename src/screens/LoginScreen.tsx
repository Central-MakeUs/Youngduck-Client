import LoginContainer from '@/components/login/loginContainer/LoginContainer';
import KakaoLogin from '@/components/login/kakaoLogin/KakaoLogin';
import {View} from 'react-native';
import palette from '@/styles/colors';
import Typography from '@/components/Typography';

function LoginScreen() {
  return (
    <LoginContainer>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Typography
          style={{
            fontWeight: '400',
            fontSize: 36,
            lineHeight: 48,
            color: palette.Primary.Dark,
            marginBottom: 8,
          }}>
          {`영잘알들의
영화교류 플랫폼`}
        </Typography>
        <Typography
          style={{
            fontSize: 60,
            color: palette.Primary.Dark,
            letterSpacing: -1,
            fontWeight: '900',
          }}>
          팝콘메이트
        </Typography>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <KakaoLogin />
        <KakaoLogin />
      </View>
    </LoginContainer>
  );
}

export default LoginScreen;
