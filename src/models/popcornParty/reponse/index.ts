export interface ISearchMovieDataResponse {
  title: string;
  posters: string;
  directors: {director: {directorNm: string}[]};
  movieSeq: string;
}
