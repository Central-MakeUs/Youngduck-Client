import {ResponseDTO} from '@/models/common/responseDTO';
import {
  ITrendingMovieData,
  ITrendingPopcornData,
} from '@/models/popcornParty/reponse';
import {api} from '@/apis';

export const getTrendingPopcornData = async (): Promise<
  ResponseDTO<ITrendingPopcornData[]>
> => {
  const res = await api.get('/popcorn');
  return res.data;
};

export const getTrendingMovieData = async (): Promise<
  ResponseDTO<ITrendingMovieData[]>
> => {
  const res = await api.get('/diverse/toprated');
  return res.data;
};
