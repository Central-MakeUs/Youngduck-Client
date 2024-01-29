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
