import {DateParsable} from 'react-native-calendar-picker';

// 스크리닝 등록하기 요청 body 타입
export interface IScreeningBodyRequest {
  posterImgUrl: string;
  screeningTitle: string;
  hostName: string;
  category: string;
  screeningStartDate: undefined | DateParsable;
  screeningEndDate: undefined | DateParsable;
  screeningStartTime: undefined | Date;
  location: string;
  information: string;
  formUrl: string;
  hostPoneNumber: string;
  hostEmail: string;
  hasAgreed: boolean;
}
