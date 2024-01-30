import {api} from '@/apis';
import {IMovieReviewBodyRequest} from '@/models/popcornParty/request';

interface IPostMovieReviewProps {
  popcornId: number;
  body: IMovieReviewBodyRequest;
}

export const postMovieReview = async ({
  popcornId,
  body,
}: IPostMovieReviewProps) => {
  const res = await api.post(`/popcorn/review/${popcornId}`, body);
  return res.data;
};
