import {
  TScreeningNegativeReview,
  TScreeningPositiveReview,
} from '@/models/enums/review';

// 특정 스크리닝 리뷰 등록하기 요청 body 타입
export interface IScreeningReviewBodyRequest {
  negative: TScreeningNegativeReview<boolean>;
  positive: TScreeningPositiveReview<boolean>;

  afterScreening: boolean | undefined;
  screeningReview: boolean | undefined;
  locationReview: boolean | undefined;
  serviceReview: boolean | undefined;

  review: string;
  hasAgreed: boolean;
}

export type TScreeningReviewBodyRequest = {
  [K in keyof IScreeningReviewBodyRequest]-?: NonNullable<
    IScreeningReviewBodyRequest[K]
  >;
};
