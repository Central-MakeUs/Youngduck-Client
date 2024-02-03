import {ISearchMovieDataResponse} from '@/models/popcornParty/reponse';
import formatString from './formatString';
import {ISearchMovieDataProps} from '@/types/popcornParty';

const getMovieList = (
  movies: ISearchMovieDataResponse[],
): ISearchMovieDataProps[] =>
  movies?.map((movie: ISearchMovieDataResponse) => {
    return {
      title: formatString('title', movie.title),
      poster: !!movie.posters
        ? formatString('poster', movie.posters)
        : 'default',
      directorNm: movie.directors.director[0].directorNm,
      movieId: movie.movieId,
      movieSeq: movie.movieSeq,
    };
  });

export default getMovieList;
