import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {IScreeningDetailReviewBodyRequest} from '@/models/screening/request/reviewRequestDto';
import {
  TScreeningReviewContent,
  TScreeningReviewCountResponse,
} from '@/models/screening/response/reviewResponseDto';

// 특정 스크리닝에 리뷰 리스트 가져오는 함수
export const getScreeningDetailReview = async (
  id: number,
): Promise<ResponseDTO<TScreeningReviewContent[]>> => {
  const res = await api.get(`/screening/screening-review/${id}`);
  //console.log('리뷰 실행', res.data);
  return res.data;
};

// 특정 스크리닝에 리뷰 등록하는 함수
export const postScreeningDetailReview = async (
  body: IScreeningDetailReviewBodyRequest,
): Promise<ResponseDTO<string>> => {
  const {id, ...review} = body;
  const res = await api.post(`/screening/review/${id}`, review);
  return res.data;
};

// 특정 리뷰 신고하는 함수
export const postScreeningComplainReview = async (
  id: number,
): Promise<ResponseDTO<string>> => {
  const res = await api.post(
    `/screening/review/complain/{reviewId}?reviewId=${id}`,
  );
  return res.data;
};

// 특정 스크리닝 리뷰의 통계 가져오는 함수
export const getScreeningRateReview = async (
  id: number,
): Promise<ResponseDTO<TScreeningReviewCountResponse>> => {
  const res = await api.get(`/screening/count?screeningId=${id}`);
  return res.data;
};
