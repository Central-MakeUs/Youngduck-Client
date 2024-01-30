import {postMovieReview} from '@/apis/popcornParty/writeReview/writeReview';
import {useMutation} from '@tanstack/react-query';

const useMovieReviewMutation = () => {
  const {mutate: movieReviewMutate} = useMutation({
    mutationFn: postMovieReview,
    onSuccess: res => console.log(res),
    onError: err => console.log(err),
  });
  return {movieReviewMutate};
};
export default useMovieReviewMutation;
