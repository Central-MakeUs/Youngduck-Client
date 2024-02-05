import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {
  IJjimScreeningProps,
  IMyScreeningProps,
  IPopcornReviewProps,
  IScreeningReviewProps,
  IWatchedScreeningProps,
} from '@/models/myPage/response';

export const getWatchedScreeningData = async (): Promise<
  ResponseDTO<IWatchedScreeningProps[]>
> => {
  const res = await api.get('/screening/screenings/past');
  return res.data;
};

export const getJjimScreeningData = async (): Promise<
  ResponseDTO<IJjimScreeningProps[]>
> => {
  const res = await api.get('/screening/bookmarked');
  return res.data;
};

export const postJjimOff = async (screeningId: number) => {
  const res = await api.post(`/screening/bookMark/${screeningId}`);
  return res.data;
};

export const getMyScreeningReviewData = async (): Promise<
  ResponseDTO<IScreeningReviewProps[]>
> => {
  const res = await api.get('/screening/review/all');
  return res.data;
};

export const getMyPopcornReviewData = async (): Promise<
  ResponseDTO<IPopcornReviewProps[]>
> => {
  const res = await api.get('/popcorn/my/reviews');
  return res.data;
};

export const getMyScreeningData = async (): Promise<
  ResponseDTO<IMyScreeningProps[]>
> => {
  const res = await api.get('/screening/all');
  return res.data;
};
