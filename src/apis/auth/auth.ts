import {LoginType} from '@/models/auth/entity';
import {apiWithoutToken, api} from '@/apis';
import {IRegisterRequest} from '@/models/auth/request';
import {ResponseDTO} from '@/models/common/responseDTO';
import {ILoginResponse, IRegisterResponse} from '@/models/auth/response';
import {getRefreshToken, setTokens} from '@/services/localStorage/localStorage';

// 로그인 api 함수
export const postLoginUser = async (body: {
  type: LoginType;
  token: string;
}): Promise<ResponseDTO<ILoginResponse>> => {
  const res = await apiWithoutToken.post(
    `/auth/oauth/login/${body.type}/idtoken?idToken=${body.token}`,
  );
  await setTokens(res.data.data.refreshToken, res.data.data.accessToken);
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

// 로그아웃 api 함수
export const postLogoutUser = async (): Promise<ResponseDTO<string>> => {
  const res = await api.post('/auth/logout');
  return res.data;
};

// refresh 토큰으로 access 토큰 재발급 api 함수
export const postAccessToken = async (): Promise<boolean> => {
  try {
    const refreshToken = await getRefreshToken();

    const res = await apiWithoutToken.post(
      `/auth/token/refresh?refreshToken=${refreshToken}`,
    );
    console.log('access token 재발급 실행');
    await setTokens(res.data.data.refreshToken, res.data.data.accessToken);
    return true;
  } catch (e) {
    console.log('에러', e);
    return false;
  }
};
