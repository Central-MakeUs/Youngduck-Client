import {DateParsable} from 'react-native-calendar-picker';

export type TCategory = {
  CASUAL: '정기상영';
  ASSIGNMENT: '과제상영';
  SPECIAL: '특별상영';
  ETC: '기타';
  GRADUATE: '졸업상영';
};
export type TEngCategory = keyof TCategory;
export type TKorCategory = TCategory[TEngCategory];

export const EngCategoryValues: Array<TEngCategory> = [
  'CASUAL',
  'ASSIGNMENT',
  'SPECIAL',
  'ETC',
  'GRADUATE',
];
export const KorCategoryValues: Array<TCategory[TEngCategory]> = [
  '정기상영',
  '과제상영',
  '특별상영',
  '졸업상영',
  '기타',
];

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

// 스크리닝 목록 api 공통 요청 body 타입
export interface IScreeningListCommon {
  category: TEngCategory | '';
  page: number;
  size: number;
}
// 스크리닝 목록 옵션 요청 body 타입
export interface IScreeningListOptionBodyRequest extends IScreeningListCommon {
  sortBy: 'createdAt' | 'startDate';
}

// 스크리닝 목록 검색 요청 body 타입
export interface IScreeningListSearchBodyRequest extends IScreeningListCommon {
  title: string;
}
