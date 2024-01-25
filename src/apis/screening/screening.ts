import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {IScreeningBodyRequest} from '@/models/screening/request';
import {
  IScreeningDetailResponse,
  TWeekScreeningResponse,
} from '@/models/screening/response';

// 스크리닝 업로드 함수
export const postScreening = async (
  body: IScreeningBodyRequest,
): Promise<ResponseDTO<IScreeningDetailResponse>> => {
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
