import {LoginType} from '@/models/auth/entity';
import {apiWithoutToken} from '@/apis';
import {IRegisterRequest} from '@/models/auth/request';
import {ResponseDTO} from '@/models/common/responseDTO';
import {ILoginResponse, IRegisterResponse} from '@/models/auth/response';
import {getRefreshToken, setTokens} from '@/services/localStorage/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 로그인 api 함수
export const postLoginUser = async (
  type: LoginType,
  token: string,
): Promise<ResponseDTO<ILoginResponse>> => {
  const res = await apiWithoutToken.post(
    `/auth/oauth/login/${type}/idtoken?idToken=${token}`,
  );
  console.log('로그인 할 때토큰 확인', res.data.data.refreshToken);
  await AsyncStorage.setItem('refreshToken', res.data.data.refreshToken);
  await AsyncStorage.setItem('accessToken', res.data.data.accessToken);
  // await setTokens(res.data.data.refreshToken, res.data.data.accessToken);
  return res.data;
};

// 회원가입 api 함수
export const postRegisterUser = async (
  type: LoginType,
  token: string,
  body: IRegisterRequest,
): Promise<ResponseDTO<IRegisterResponse>> => {
  const res = await apiWithoutToken.post(
    `/auth/oauth/register/${type}?idToken=${token}`,
    body,
  );
  return res.data;
};

// refresh 토큰으로 access 토큰 재발급 api 함수
export const postAccessToken = async (): Promise<boolean> => {
  try {
    // 로컬 스토리지에서 refresh 토큰 꺼내기
    //const refreshToken = await getRefreshToken();
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    console.log('재발급 refresh token 꺼내보쟈: ', refreshToken);
    const res = await apiWithoutToken.post(
      `/auth/token/refresh?refreshToken=${refreshToken}`,
    );
    console.log('토큰 재발급 응답 성공', res.data);
    await AsyncStorage.setItem('refreshToken', res.data.data.refreshToken);
    await AsyncStorage.setItem('accessToken', res.data.data.accessToken);
    //await setTokens(res.data.data.refreshToken, res.data.data.accessToken);
    return true;
  } catch (e) {
    console.log('에러', e);
    return false;
  }
};
