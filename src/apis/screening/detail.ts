import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {
  IScreeningBookMarkResponse,
  IScreeningDetailContent,
  IScreeningMyDetailResponse,
} from '@/models/screening/response/detailResponseDto';

// 스크리닝 디테일 id 정보 함수
export const getScreeningDetailContent = async (
  id: number,
): Promise<ResponseDTO<IScreeningDetailContent>> => {
  const res = await api.get(`/screening/${id}`);
  return res.data;
};

// 스크리닝 찜 하기 함수
export const postScreeningBookmark = async (
  id: number,
): Promise<ResponseDTO<IScreeningBookMarkResponse>> => {
  const res = await api.post(`/screening/bookMark/${id}`);
  return res.data;
};

// 내가 작성한 스크리닝 디테일 id 정보 함수
export const getScreeningMyDetailContent = async (
  id: number,
): Promise<ResponseDTO<IScreeningMyDetailResponse>> => {
  const res = await api.get(`/screening/myScreening/${id}`);
  return res.data;
};
