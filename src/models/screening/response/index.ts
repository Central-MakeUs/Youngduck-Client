import {DateParsable} from 'react-native-calendar-picker';

import {TNonNullScreeningBodyRequest} from '../request';
import {TEngCategory} from '@/models/enums/category';

// 이번주 상영작 응답 타입
// 실시간 상영작 응답 타입
// 댓글 많은 상영작 응답 타입
export interface IWeekScreening extends TNonNullScreeningBodyRequest {
  screeningId: number;
  private: true;
  reviewCount: number;
}

export interface IWeekScreeningData extends Omit<IWeekScreening, 'category'> {
  category: TEngCategory;
}

export type TWeekScreeningResponse = IWeekScreeningData[];

// 스크리닝 목록 응답 타입
export type TScreeningContent = {
  createdAt: Date;
  updatedAt: Date;
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
    setIsArt: number;
    custom: number;
    music: number;
    ost: number;
    writtenByGod: number;
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
  month: Date;
  screeningStartDate: DateParsable;
  screeningEndDate: DateParsable;
  screeningStartTime: Date;
  location: string;
  participationUrl: string;
  information: string;
  hasAgreed: boolean;
  category: TEngCategory;
  screeningRate: number;
  movieReviewCountNeg: number;
  movieReviewCountPos: number;
  locationCountNeg: number;
  locationCountPos: number;
  serviceCountNeg: number;
  serviceCountPos: number;
  private: true;
};

export interface IScreeningInfinityResponse<T> {
  content: T[];
  page: number;
  size: number;
  hasNext: boolean;
}

export type TScreeningListResponse =
  IScreeningInfinityResponse<TScreeningContent>;

// 스크리닝 디테일 응답 타입
export interface IScreeningDetail extends TNonNullScreeningBodyRequest {
  screeningId: number;
  private: boolean;
  bookmarked: boolean;
  reviewed: boolean;
}

export interface IScreeningDetailContent
  extends Omit<IScreeningDetail, 'category'> {
  category: TEngCategory;
}

// 스크리닝 리뷰 리스트 응답 타입
export type TScreeningReviewContent = {
  reviewId: number;
  afterScreening: boolean;
  createdAt: Date;
  screeningId: number;
  review: string;
  userId: number;
  nickname: string;
  profileImageNumber: number;
};
