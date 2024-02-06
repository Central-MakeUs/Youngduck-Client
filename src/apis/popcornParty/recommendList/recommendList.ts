import {apiWithoutToken} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {TPopcornRecommendData} from '@/models/popcornParty/reponse';

export const getPopcornOfNextWeekData = async (): Promise<
  ResponseDTO<TPopcornRecommendData[]>
> => {
  const res = await apiWithoutToken.get('/popcorn/recommend/all');
  return res.data;
};
