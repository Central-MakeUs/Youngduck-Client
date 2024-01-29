import {ResponseDTO} from '@/models/common/responseDTO';
import {
  TRandomPopcornRecommendData,
  TTrendingMovieData,
  TTrendingPopcornData,
} from '@/models/popcornParty/reponse';
import {api} from '@/apis';

export const getTrendingPopcornData = async (): Promise<
  ResponseDTO<TTrendingPopcornData[]>
> => {
  const res = await api.get('/popcorn');
  return res.data;
};

export const getTrendingMovieData = async (): Promise<
  ResponseDTO<TTrendingMovieData[]>
> => {
  const res = await api.get('/diverse/toprated');
  return res.data;
};

export const getRandomPopcornRecommendData = async (): Promise<
  ResponseDTO<TRandomPopcornRecommendData[]>
> => {
  const res = await api.get('/popcorn/recommend');
  return res.data;
};
