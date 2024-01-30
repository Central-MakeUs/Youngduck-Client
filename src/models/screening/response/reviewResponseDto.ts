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

// 스크리닝 리뷰 상영 지수 응답 타입
export type TScreeningReviewPostive = {
  serviceCountPos: number;
  locationCountPos: number;
  movieReviewCountPos: number;
};

export type TScreeningReviewNegative = {
  movieReviewCountNeg: number;
  locationCountNeg: number;
  serviceCountNeg: number;
};
export type TScreeningReviewCountResponse = {
  screeningRate: number;
} & TScreeningReviewPostive &
  TScreeningReviewNegative;
