import LoginContainer from '@/components/login/loginContainer/LoginContainer';
import KakaoLogin from '@/components/login/kakaoLogin/KakaoLogin';

function LoginScreen() {
  return (
    <LoginContainer>
      <KakaoLogin />
    </LoginContainer>
  );
}

export default LoginScreen;
