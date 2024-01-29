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
export type TScreeningReviewCountResponse = {
  movieReviewCountNeg: number;
  movieReviewCountPos: number;
  locationCountNeg: number;
  locationCountPos: number;
  serviceCountNeg: number;
  serviceCountPos: number;
  screeningRate: number;
};
