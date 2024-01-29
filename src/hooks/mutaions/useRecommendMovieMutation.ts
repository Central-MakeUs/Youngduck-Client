import {postRecommendMovie} from '@/apis/popcornParty';
import {useMutation} from '@tanstack/react-query';

const useRecommendMovieMutation = () => {
  const {mutate: recommendMovieMutate} = useMutation({
    mutationFn: postRecommendMovie,
    onSuccess: res => console.log(res),
    onError: err => console.log(err),
  });
  return {recommendMovieMutate};
};
export default useRecommendMovieMutation;
