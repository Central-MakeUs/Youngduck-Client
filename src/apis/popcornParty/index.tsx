import {ResponseDTO} from '@/models/common/responseDTO';
import {ITrendingPopcornData} from '@/models/popcornParty/reponse';
import {api} from '@/apis';

export const getTrendingPopcornItems = async (): Promise<
  ResponseDTO<ITrendingPopcornData[]>
> => {
  const res = await api.get('/popcorn');
  return res.data;
};
