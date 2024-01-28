import {
  TScreeningNegativeReview,
  TScreeningPositiveReview,
} from '@/models/enums/review';

// 특정 스크리닝 리뷰 등록하기 요청 body 타입
export interface IScreeningReviewBodyRequest {
  negative: TScreeningNegativeReview;
  positive: TScreeningPositiveReview;
  afterScreening: boolean;
  screeningReview: boolean;
  locationReview: boolean;
  serviceReview: boolean;
  review: string;
  hasAgreed: boolean;
}
