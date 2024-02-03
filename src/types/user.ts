import {IRegisterRequest} from '@/models/auth/request';

export interface IRegisterMutationProps {
  type: 'KAKAO' | 'APPLE';
  idToken: string;
  body: IRegisterRequest;
}
export interface IAppleUser {
  name: string;
  email: string;
}
