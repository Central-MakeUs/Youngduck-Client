import {ILoginType} from '@/models/user/entity/loginType';
import {IRegisterLoginBody} from '@/models/user/request/registerLoginBody';

import axiosInstance from '.';

// 회원 가입 api 함수
export const postRegisterUser = async (
  type: ILoginType,
  token: string,
  body: IRegisterLoginBody,
) => {
  try {
    const res = await axiosInstance.post(
      `/auth/oauth/register/${type}?idToken=${token}`,
      body,
    );
    return res;
  } catch (err) {
    return err;
  }
};

// 로그인 api 함수
export const postLoginUser = async (type: ILoginType, token: string) => {
  try {
    const res = await axiosInstance.post(
      `/auth/oauth/login/${type}/idtoken?idToken=${token}`,
    );
    console.log('response: ', res);
  } catch (e) {
    console.log('error in axios: ', e);
  }
};