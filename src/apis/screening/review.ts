import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {TScreeningReviewBodyRequest} from '@/models/screening/request/reviewRequestDto';
import {TScreeningReviewContent} from '@/models/screening/response/reviewResponseDto';

// 특정 스크리닝에 리뷰 리스트 가져오는 함수
export const getScreeningDetailReview = async (
  id: number,
): Promise<ResponseDTO<TScreeningReviewContent[]>> => {
  const res = await api.get(`/screening/screening-review/${id}`);
  return res.data;
};

// 특정 스크리닝에 리뷰 등록하는 함수
export const postScreeningDetailReview = async (
  id: number,
  body: TScreeningReviewBodyRequest,
): Promise<ResponseDTO<string>> => {
  const res = await api.post(`/screening/review/${id}`, body);
  return res.data;
};
