import {ResponseDTO} from '@/models/common/responseDTO';
import {
  TPopcornRecommendData,
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

export const geTPopcornRecommendData = async (): Promise<
  ResponseDTO<TPopcornRecommendData[]>
> => {
  const res = await api.get('/popcorn/recommend');
  return res.data;
};

export const postVoteMovie = async (id: number) => {
  const res = await api.post(
    `/popcorn/recommend/vote?recommendedPopcorn=${id}`,
  );
  return res;
};
