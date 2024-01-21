import {TouchableOpacity} from 'react-native';
import kakaoLoginStyles from './KakaoLogin.style';
import Typography from '@/components/typography';
import KakaoLogo from '@/assets/icons/kakao-logo.svg';
import useNavigator from '@/hooks/useNavigator';
import {getKakaoIdToken, getKakaoProfile} from '@/apis/auth/social';
import {postLoginUser} from '@/apis/auth/auth';
import {useUserStore} from '@/stores/user';

function KakaoLogin() {
  const {stackNavigation} = useNavigator();

  const {setUser, user} = useUserStore();

  // 카카오 로그인 함수
  const handleSignInKakao = async (): Promise<void> => {
    const res = await getKakaoIdToken();
    const login = await postLoginUser('KAKAO', res.idToken);
    const profile = await getKakaoProfile();
    if (profile) {
      setUser({
        ...user,
        name: profile.nickname,
        email: profile.email,
        idToken: res.idToken,
        type: 'KAKAO',
      });
    }

    console.log('로그인 데이터', login);

    // 최초 유저 회원가입으로 이동
    if (!login.data.canLogin) {
      stackNavigation.navigate('SignupScreen');
    } else {
      stackNavigation.navigate('BottomTabScreens');
    }
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
