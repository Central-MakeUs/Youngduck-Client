export interface TTrendingData {
  popcornId?: number;
  movieId?: number;
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
  movieId: 'K' | 'F' | 'B';
}

export interface IPopcornPartyDetailResponse {
  popcornId: number;
  movieTitle: string;
  directorName: string;
  imageUrl: string;
  detail: string;
}

export interface IPopcornRateResponse {
  data: number;
}

export interface IPopcornReviewResponse {
  userId: number;
  nickName: string;
  profileImgNum: number;
  afterScreening: boolean;
  review: string;
  createdAt: string;
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
