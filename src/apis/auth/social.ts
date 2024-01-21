import * as Kakao from '@react-native-seoul/kakao-login';

// 카카오 로그인 프로필 정보 받아오는 함수
export const getKakaoProfile = async (): Promise<
  Kakao.KakaoProfile | unknown
> => {
  try {
    const res = await Kakao.getProfile();
    return res;
  } catch (error) {
    return error;
  }
};

// 카카오 로그인해 idToken 받아오는 함수
export const getKakaoIdToken = async (): Promise<Kakao.KakaoOAuthToken> => {
  const res = await Kakao.login();
  return res;
  //if (error?.code === 'E_CANCELLED_OPERATION') {
  //  console.log('Login Cancel', error?.message);
  //} else {
  //  console.log(`Login Fail(code:${error.code})`, error.message);
  //}
};
