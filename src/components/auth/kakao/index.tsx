import {TouchableOpacity} from 'react-native';
import kakaoLoginStyles from './KakaoLogin.style';
import Typography from '@/components/typography';
import KakaoLogo from '@/assets/icons/kakao-logo.svg';
import useNavigator from '@/hooks/useNavigator';
import {getKakaoIdToken, getKakaoProfile} from '@/apis/auth/social';
import {postLoginUser} from '@/apis/auth/auth';
import {useUserStore} from '@/stores/user';
import {setIsInstalled} from '@/services/localStorage/localStorage';

function KakaoLogin() {
  const {stackNavigation} = useNavigator();

  const {setUser, user} = useUserStore();

  // 카카오 로그인 함수
  const handleSignInKakao = async (): Promise<void> => {
    const res = await getKakaoIdToken();
    const profile = await getKakaoProfile();

    const login = await postLoginUser('KAKAO', res.idToken);
    if (profile) {
      setUser({
        ...user,
        name: profile.nickname,
        email: profile.email,
        idToken: res.idToken,
        type: 'KAKAO',
      });
    }
    if (login) {
      if (!login.data.canLogin) {
        stackNavigation.navigate('SignupScreen');
      } else {
        setIsInstalled(true);
        stackNavigation.navigate('BottomTabScreens');
      }
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
