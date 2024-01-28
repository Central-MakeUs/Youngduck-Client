import {DateParsable} from 'react-native-calendar-picker';

import {TEngCategory, TKorCategory} from '@/models/enums/category';
import {TScreeningTimeOption} from '@/models/enums/time';

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

// 스크리닝 목록 api 공통 요청 body 타입
export interface IScreeningListCommon {
  category: TEngCategory | '';
  page: number;
  size: number;
}
// 스크리닝 목록 옵션 요청 body 타입
export interface IScreeningListOptionBodyRequest extends IScreeningListCommon {
  sortBy: TScreeningTimeOption;
}

// 스크리닝 목록 검색 요청 body 타입
export interface IScreeningListSearchBodyRequest extends IScreeningListCommon {
  title: string;
}
