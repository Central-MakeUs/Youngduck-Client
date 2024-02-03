import {TQuitReason} from '@/models/enums/user';
import {TGenre} from '@/types/signup/genre';

export interface IRegisterRequest {
  nickname: string;
  lawAgreement: boolean;
  genres: TGenre[];
  name?: string;
  email?: string;
}

// 계정 탈퇴 body 타입
export interface IDeleteUserRequest {
  appleCode: string;
  quitReason: TQuitReason;
}
