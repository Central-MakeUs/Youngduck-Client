import {LoginType} from '@/models/auth/entity';

export interface IUserDataResponse {
  email: string;
  name: string;
  nickname: string;
  profileImgNum: number;
  oauthProvider: LoginType;
}

export interface INicknameDuplicationResponse {
  duplicate: boolean;
}
