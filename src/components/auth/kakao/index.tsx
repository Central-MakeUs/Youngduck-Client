import {TouchableOpacity} from 'react-native';
import kakaoLoginStyles from './KakaoLogin.style';
import Typography from '@/components/typography';
import KakaoLogo from '@/assets/icons/kakao-logo.svg';
import useNavigator from '@/hooks/useNavigator';
import {getKakaoIdToken} from '@/apis/auth/social';
import {postLoginUser} from '@/apis/auth/auth';

function KakaoLogin() {
  const {stackNavigation} = useNavigator();

  // 카카오 로그인 함수
  const handleSignInKakao = async (): Promise<void> => {
    //Kakao.login()
    //  .then(async result => {
    //    const idToken = result.idToken;
    //    const res = await postLoginUserTest('KAKAO', idToken);
    //    console.log('로그인 응답', res);
    //    //getKakaoProfile();
    //  })
    //  .catch(error => {
    //    if (error.code === 'E_CANCELLED_OPERATION') {
    //      console.log('Login Cancel', error.message);
    //    } else {
    //      console.log(`Login Fail(code:${error.code})`, error.message);
    //    }
    //  });
    const res = await getKakaoIdToken();
    console.log('토큰', res.idToken);
    const login = await postLoginUser('KAKAO', res.idToken);
    console.log('응답', login);

    // 일단 로그인 후 홈으로 이동
    stackNavigation.navigate('BottomTabScreens');
  };
  return (
    <TouchableOpacity
      onPress={handleSignInKakao}
      style={kakaoLoginStyles.button}
      activeOpacity={0.8}>
      <KakaoLogo />
      <Typography style="Body1" ml={16}>
        카카오계정으로 시작하기
      </Typography>
    </TouchableOpacity>
  );
}

export default KakaoLogin;
