import {TGenre} from '@/types/signup/genre';

export interface IRegisterRequest {
  nickname: string;
  lawAgreement: boolean;
  genres: TGenre[];
  name: string;
  email: string;
}
