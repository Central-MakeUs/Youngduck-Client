import {ILoginType} from '@/models/user/entity/loginType';
import {IRegisterLoginBody} from '@/models/user/request/registerLoginBody';
import axios from 'axios';
import Config from 'react-native-config';

// 회원 가입 api 함수
export const postRegisterUser = async (
  type: ILoginType,
  token: string,
  body: IRegisterLoginBody,
) => {
  try {
    const res = await axios.post(
      `${Config.BASE_URL}/auth/oauth/register/${type}?idToken=${token}`,
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
    const res = await axios.post(
      `${Config.BASE_URL}/auth/oauth/login/${type}/idtoken?idToken=${token}`,
    );
    console.log('response: ', res);
  } catch (e) {
    console.log('error in axios: ', e);
  }
};
