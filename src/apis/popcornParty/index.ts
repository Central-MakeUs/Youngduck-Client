import {ResponseDTO} from '@/models/common/responseDTO';
import {
  TPopcornRecommendData,
  TTrendingMovieData,
  TTrendingPopcornData,
  ISearchMovieDataResponse
} from '@/models/popcornParty/reponse';
import {IRecommendMovieBodyRequest} from '@/models/popcornParty/request';
import Config from 'react-native-config';
import {api} from '@/apis';

export const getSearchMovieData = async (
  movie: string,
): Promise<ISearchMovieDataResponse[]> => {
  const params = {
    collection: 'kmdb_new2',
    title: movie,
    ServiceKey: Config.KMDB_API_KEY,
    listCount: 500,
  };
  const res = await api.get(Config.KMDB_API_BASE_URL, {params});
  return res.data.Data[0].Result;
};

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

export const postRecommendMovie = async (
  body: IRecommendMovieBodyRequest,
): Promise<ResponseDTO<IRecommendMovieBodyRequest>> => {
  const res = await api.post('/popcorn/recommend', body);
  return res.data;
};

export const postVoteMovie = async (id: number) => {
  const res = await api.post(
    `/popcorn/recommend/vote?recommendedPopcorn=${id}`,
  );
  return res;
};