import {TouchableOpacity} from 'react-native';
import Typography from '@/components/typography';
import KakaoLogo from '@/assets/icons/kakao-logo.svg';
import {getKakaoIdToken, getKakaoProfile} from '@/apis/auth/social';
import {useUserStore} from '@/stores/user';

import kakaoLoginStyles from './KakaoLogin.style';
import useLoginMutation from '@/hooks/mutaions/useLoginMutation';

function KakaoLogin() {
  const {setUser, user} = useUserStore();
  const {loginMutate} = useLoginMutation();

  // 카카오 로그인 함수
  const handleSignInKakao = async (): Promise<void> => {
    const res = await getKakaoIdToken();
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
    loginMutate({
      type: 'KAKAO',
      token: res.idToken,
    });
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
