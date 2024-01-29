export interface ITrendingData {
  popcornId?: number;
  movieId?: number;
  index: number;
  rank?: string;
  movieTitle: string;
  imageUrl: string;
  mode: 'with-ranking' | 'without-ranking';
}

export interface ISearchMovieDataResponse {
  title: string;
  posters: string;
  directors: {director: {directorNm: string}[]};
  movieSeq: string;
}

export type TTrendingMovieData = Omit<ITrendingData, 'popcornId'>;
export type TTrendingPopcornData = Omit<ITrendingData, 'movieId' | 'rank'>;
export type TPopcornRecommendData = {
  id: number;
  movieTitle: string;
  imageUrl: string;
  recommendationReason: string;
  recommendationCount: number;
  movieDirector: string;
};