import * as Kakao from '@react-native-seoul/kakao-login';

// 카카오 로그인 프로필 정보 받아오는 함수
export const getKakaoProfile = async (): Promise<Kakao.KakaoProfile> => {
  const res = await Kakao.getProfile();
  return res;
};

// 카카오 로그인해 idToken 받아오는 함수
export const getKakaoIdToken = async (): Promise<Kakao.KakaoOAuthToken> => {
  const res = await Kakao.login();
  return res;
};
