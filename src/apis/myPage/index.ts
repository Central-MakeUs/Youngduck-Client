import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {
  IJjimScreeningProps,
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
