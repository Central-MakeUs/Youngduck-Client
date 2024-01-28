import {ISearchMovieDataResponse} from '@/models/popcornParty/reponse';
import {api} from '@/apis';
import Config from 'react-native-config';

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
