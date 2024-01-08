import * as KakaoLogin from '@react-native-seoul/kakao-login';

// 카카오 로그인 프로필 정보 받아오는 함수
export const getKakaoProfile = async (): Promise<
  KakaoLogin.KakaoProfile | unknown
> => {
  try {
    const res = await KakaoLogin.getProfile();
    return res;
  } catch (error) {
    return error;
  }
};
