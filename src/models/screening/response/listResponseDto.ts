import {TEngCategory} from '@/models/enums/category';
import {
  TScreeningNegativeReview,
  TScreeningPositiveReview,
} from '@/models/enums/review';
import {DateParsable} from 'react-native-calendar-picker';

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
  positiveCount: TScreeningPositiveReview;
  negativeCount: TScreeningNegativeReview;
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
