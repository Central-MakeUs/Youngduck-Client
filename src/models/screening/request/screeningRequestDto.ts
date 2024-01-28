import {TKorCategory} from '@/models/enums/category';
import {DateParsable} from 'react-native-calendar-picker';

// 스크리닝 등록하기 요청 body 타입
export interface IScreeningBodyRequest {
  posterImgUrl: string;
  screeningTitle: string;
  hostName: string;
  category: TKorCategory | '';
  screeningStartDate: DateParsable | undefined;
  screeningEndDate: DateParsable | undefined;
  screeningStartTime: Date | undefined;
  location: string;
  information: string;
  formUrl: string;
  hostPoneNumber: string;
  hostEmail: string;
  hasAgreed: boolean;
}

export type TNonNullScreeningBodyRequest = {
  [K in keyof IScreeningBodyRequest]-?: NonNullable<IScreeningBodyRequest[K]>;
};
