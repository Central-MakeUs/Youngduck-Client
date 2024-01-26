import {TouchableOpacity} from 'react-native';
import {useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';

import Typography from '@/components/typography';
import KakaoLogo from '@/assets/icons/kakao-logo.svg';
import useNavigator from '@/hooks/useNavigator';
import {getKakaoIdToken, getKakaoProfile} from '@/apis/auth/social';
import {postLoginUser} from '@/apis/auth/auth';
import {useUserStore} from '@/stores/user';
import {setIsInstalled} from '@/services/localStorage/localStorage';
import {ResponseErrorAPI} from '@/models/common/responseDTO';
import stackScreens from '@/constants/stackScreens';

import kakaoLoginStyles from './KakaoLogin.style';

function KakaoLogin() {
  const {stackNavigation} = useNavigator();

  const {setUser, user} = useUserStore();

  const loginMutate = useMutation({
    mutationFn: postLoginUser,
    onSuccess: login => {
      if (!login.data.canLogin) {
        stackNavigation.navigate(stackScreens.SignupScreen);
      } else {
        setIsInstalled(true);
        stackNavigation.navigate(stackScreens.BottomTabScreens);
      }
    },
    onError: err => {
      const errorResponse = (err as AxiosError).response;
      if (errorResponse) {
        const error = errorResponse.data as ResponseErrorAPI;
        if (error.status === 400) {
          stackNavigation.navigate(stackScreens.SignupScreen);
        }
      }
    },
  });

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
    await loginMutate.mutateAsync({
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
