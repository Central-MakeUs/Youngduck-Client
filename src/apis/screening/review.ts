import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {TScreeningReviewContent} from '@/models/screening/response';

// 특정 스크리닝에 리뷰 리스트 가져오는 함수
export const getScreeningDetailReview = async (
  id: number,
): Promise<ResponseDTO<TScreeningReviewContent[]>> => {
  const res = await api.get(`/screening/screening-review/${id}`);
  return res.data;
};
