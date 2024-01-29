export interface TTrendingData {
  popcornId?: number;
  movieId?: number;
  index: number;
  rank?: string;
  movieTitle: string;
  imageUrl: string;
  mode: 'with-ranking' | 'without-ranking';
}

export type TTrendingMovieData = Omit<TTrendingData, 'popcornId'>;
export type TTrendingPopcornData = Omit<TTrendingData, 'movieId' | 'rank'>;
export type TPopcornRecommendData = {
  id: number;
  movieTitle: string;
  imageUrl: string;
  recommendationReason: string;
  recommendationCount: number;
  movieDirector: string;
};
