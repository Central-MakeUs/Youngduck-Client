import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {IWatchedScreeningProps} from '@/models/myPage/response';

export const getWatchedScreeningData = async (): Promise<
  ResponseDTO<IWatchedScreeningProps[]>
> => {
  const res = await api.get('/screening/screenings/past');
  return res.data;
};
