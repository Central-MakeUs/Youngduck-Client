import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {
  IPopcornPartyDetailResponse,
  IPopcornRateResponse,
  IPopcornReviewResponse,
} from '@/models/popcornParty/reponse';

export const getPopcornPartyDetailData = async (
  popcornId: number,
): Promise<ResponseDTO<IPopcornPartyDetailResponse>> => {
  const res = await api.get(`/popcorn/${popcornId}`);
  return res.data;
};

export const getPopconrRateData = async (
  popcornId: number,
): Promise<ResponseDTO<IPopcornRateResponse>> => {
  const res = await api.get(`/popcorn/rate/${popcornId}`);
  return res.data;
};

export const getPopconrReviewData = async (
  popcornId: number,
): Promise<ResponseDTO<IPopcornReviewResponse[]>> => {
  const res = await api.get(`/popcorn/reviews/${popcornId}`);
  return res.data;
};

export const postComplainUser = async (userId: number) => {
  const res = await api.post(`/popcorn/review/complain/${userId}`);
  return res.data;
};
