import {getKakaoProfile} from '@/apis/social';
import {postLoginUser} from '@/apis/user';
import * as Kakao from '@react-native-seoul/kakao-login';
import {TouchableOpacity} from 'react-native';
import kakaoLoginStyles from './KakaoLogin.style';
import Typography from '@/components/Typography';
import KakoLogo from '@/assets/icons/kakao-logo.svg';

function KakaoLogin() {
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
  };
  return (
    <TouchableOpacity
      onPress={handleSignInKakao}
      style={kakaoLoginStyles.button}
      activeOpacity={0.8}>
      <KakoLogo />
      <Typography style="Body1" ml={16}>
        카카오 로그인
      </Typography>
    </TouchableOpacity>
  );
}

export default KakaoLogin;
