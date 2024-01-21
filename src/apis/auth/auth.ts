import {LoginType} from '@/models/auth/entity';
import {apiWithoutToken} from '@/apis';
import {IRegisterRequest} from '@/models/auth/request';

// 로그인 api 함수
export const postLoginUser = async (type: LoginType, token: string) => {
  try {
    const res = await apiWithoutToken.post(
      `/auth/oauth/login/${type}/idtoken?idToken=${token}`,
    );
    return res.data;
  } catch (e) {
    console.log('error in axios: ', e);
  }
};

// 회원가입 api 함수
export const postRegisterUser = async (
  type: LoginType,
  token: string,
  body: IRegisterRequest,
) => {
  try {
    const res = await apiWithoutToken.post(
      `/auth/oauth/register/${type}?idToken=${token}`,
      body,
    );
    return res;
  } catch (err) {
    return err;
  }
};
