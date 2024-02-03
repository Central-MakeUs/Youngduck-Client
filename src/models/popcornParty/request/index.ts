export interface IRecommendMovieBodyRequest {
  movieId: string;
  movieType: 'K' | 'F' | 'B';
  reason: string;
  agreed: boolean;
}

export interface IMovieReviewBodyRequest {
  hasWatched: boolean;
  beforeScreening: boolean;
  afterScreening: boolean;
  review: string;
  hasAgreed: boolean;
  popcornPositive: {[key: string]: boolean};
  popcornNegative: {[key: string]: boolean};
}
