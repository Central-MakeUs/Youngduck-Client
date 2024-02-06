import {api, apiWithoutToken} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {
  IScreeningBodyRequest,
  IScreeningModifyBodyRequest,
} from '@/models/screening/request/screeningRequestDto';
import {TWeekScreeningResponse} from '@/models/screening/response/screeningResponseDto';

// 스크리닝 업로드 함수
export const postScreening = async (body: IScreeningBodyRequest) => {
  const res = await api.post('/screening/upload-screening', body);
  return res.data;
};

// 스크리닝 수정 함수
export const patchScreening = async (body: IScreeningModifyBodyRequest) => {
  const {screeningId, ...modifyBody} = body;
  const res = await api.patch(
    `/screening/screening/${screeningId}`,
    modifyBody,
  );
  return res.data;
};

// 이번주 스크리닝 가져오는 함수
export const getWeekScreening = async (): Promise<
  ResponseDTO<TWeekScreeningResponse>
> => {
  const res = await apiWithoutToken.get('/screening/upcoming-Screening');
  return res.data;
};

// 가장 최근 실시간 3개 스크리닝 가져오는 함수
export const getRecentScreening = async (): Promise<
  ResponseDTO<TWeekScreeningResponse>
> => {
  const res = await apiWithoutToken.get('/screening/recent-Screening');
  return res.data;
};

// 댓글 많은 스크리닝 가져오는 함수
export const getMostCommentScreening = async (): Promise<
  ResponseDTO<TWeekScreeningResponse>
> => {
  const res = await apiWithoutToken.get('/screening/most-reviewed');
  return res.data;
};
