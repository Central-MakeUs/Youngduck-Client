import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {
  IScreeningBodyRequest,
  IScreeningListOptionBodyRequest,
  IScreeningListSearchBodyRequest,
} from '@/models/screening/request';
import {
  TScreeningListResponse,
  TWeekScreeningResponse,
} from '@/models/screening/response';

// 스크리닝 업로드 함수
export const postScreening = async (body: IScreeningBodyRequest) => {
  const res = await api.post('/screening/upload-screening', body);
  return res.data;
};

// 이번주 스크리닝 함수
export const getWeekScreening = async (): Promise<
  ResponseDTO<TWeekScreeningResponse>
> => {
  const res = await api.get('/screening/upcoming-Screening');
  return res.data;
};

// 가장 최근 실시간 3개 스크리닝 함수
export const getRecentScreening = async (): Promise<
  ResponseDTO<TWeekScreeningResponse>
> => {
  const res = await api.get('/screening/recent-Screening');
  return res.data;
};

// 댓글 많은 스크리닝 함수
export const getMostCommentScreening = async (): Promise<
  ResponseDTO<TWeekScreeningResponse>
> => {
  const res = await api.get('/screening/most-reviewed');
  return res.data;
};

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
    `/screening/screenings/search?title=${body.title}&category=${
      body.category
    }&page=${body.page}&size=${10}`,
  );
  return res.data;
};
