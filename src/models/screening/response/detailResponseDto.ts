import {TEngCategory} from '@/models/enums/category';
import {TNonNullScreeningBodyRequest} from '../request/screeningRequestDto';
import {
  TScreeningNegativeReview,
  TScreeningPositiveReview,
} from '@/models/enums/review';

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

// 스크리닝 찜하기 응답 타입
export interface IScreeningBookMarkResponse {
  screeningId: number;
  canCancel: boolean;
  bookMarked: boolean;
}

// 내가 작성한 스크리닝 디테일 응답 타입
export interface IScreeningMyDetailContent
  extends TNonNullScreeningBodyRequest {
  screeningId: number;
  private: boolean;
}

export interface IScreeningMyDetailResponse
  extends Omit<IScreeningMyDetailContent, 'category'> {
  category: TEngCategory;
}

// 내가 작성한 스크리닝 댓글 통계 응답 타입
export interface IScreeningMyStatisticsResponse {
  positiveCount: TScreeningPositiveReview<number>;
  negativeCount: TScreeningNegativeReview<number>;
  totalCount: number;
}
