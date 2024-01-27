export interface ITrendingData {
  popcornId?: number;
  movieId?: number;
  index: number;
  rank?: string;
  movieTitle: string;
  imageUrl: string;
  mode: 'with-ranking' | 'without-ranking';
}

export type ITrendingPopcornData = Omit<ITrendingData, 'movieId' | 'rank'>;
export type ITrendingMovieData = Omit<ITrendingData, 'popcornId'>;
