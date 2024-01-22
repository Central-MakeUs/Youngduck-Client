import {DateParsable} from 'react-native-calendar-picker';

// 스크리닝 id 디테일 응답 타입
export interface IScreeningDetailResponse {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  posterImgUrl: string;
  hostInfo: {
    hostName: string;
    hostPhoneNumber: string;
    hostEmail: string;
  };
  positiveCount: {
    cineMaster: number;
    greatFilming: number;
    pom: number;
    animationIsGood: number;
    artIsGood: number;
    custom: number;
    music: number;
    topicIsGood: number;
    linesAreGood: number;
    endingIsGood: number;
    castingIsGood: number;
    actingIsGood: number;
    chemistryIsGood: number;
  };
  negativeCount: {
    iffy: number;
    badEditing: number;
    badAngle: number;
    badDetail: number;
    badColor: number;
    badCustom: number;
    badMusic: number;
    badSound: number;
    badEnding: number;
    endingLoose: number;
    noDetail: number;
    badTopic: number;
    badActing: number;
    badCasting: number;
  };
  month: string;
  screeningStartDate: DateParsable;
  screeningEndDate: DateParsable;
  screeningStartTime: Date;
  location: string;
  participationUrl: string;
  information: string;
  hasAgreed: boolean;
  category: string; // TODO: 백엔드 category 타입 생성
  private: boolean;
}
