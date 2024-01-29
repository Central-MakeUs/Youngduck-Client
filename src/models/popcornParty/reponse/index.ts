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
export type TRandomPopcornRecommendData = {
  id: number;
  movieId: string;
  movieTitle: string;
  imageUrl: string;
  recommendationReason: string;
  recommendationCount: 0;
  movieDirector: string;
};
