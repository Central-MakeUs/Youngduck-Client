import {LoginType} from '@/models/auth/entity';
import {apiWithoutToken} from '@/apis';
import {IRegisterRequest} from '@/models/auth/request';
import {ResponseDTO} from '@/models/common/responseDTO';
import {ILoginResponse, IRegisterResponse} from '@/models/auth/response';
import {setTokens} from '@/services/localStorage/localStorage';

// 로그인 api 함수
export const postLoginUser = async (
  type: LoginType,
  token: string,
): Promise<ResponseDTO<ILoginResponse>> => {
  const res = await apiWithoutToken.post(
    `/auth/oauth/login/${type}/idtoken?idToken=${token}`,
  );
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
export const postAccessToken = async (
  refreshToken: string,
): Promise<boolean> => {
  try {
    const res = await apiWithoutToken.post(
      `/auth/token/refresh?refreshToken=${refreshToken}`,
    );
    console.log(res.data);
    await setTokens(res.data.data.refreshToken, res.data.data.accessToken);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
