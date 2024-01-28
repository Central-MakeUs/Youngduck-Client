import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {
  IScreeningListOptionBodyRequest,
  IScreeningListSearchBodyRequest,
} from '@/models/screening/request/listRequestDto';
import {TScreeningListResponse} from '@/models/screening/response/listResponseDto';

// 스크리닝 목록 시간 옵션 고르는 함수
export const getTimeOptionScreeningList = async (
  body: IScreeningListOptionBodyRequest,
): Promise<ResponseDTO<TScreeningListResponse>> => {
  const res = await api.get(
    `/screening/screenings/search-by-date?category=${body.category}&page=${body.page}&size=${body.size}&sortBy=${body.sortBy}`,
  );
  return res.data;
};

// 스크리닝 목록 검색 함수
export const getSearchScreeningList = async (
  body: IScreeningListSearchBodyRequest,
): Promise<ResponseDTO<TScreeningListResponse>> => {
  const res = await api.get(
    `/screening/screenings/search?title=${body.title}&category=${body.category}&page=${body.page}&size=${body.size}`,
  );
  return res.data;
};
