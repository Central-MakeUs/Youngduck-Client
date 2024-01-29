import {useMutation} from '@tanstack/react-query';
import {postRecommendMovie} from '@/apis/popcornParty/recommendList/recommendList';

const useRecommendMovieMutation = () => {
  const {mutate: recommendMovieMutate} = useMutation({
    mutationFn: postRecommendMovie,
    onSuccess: () => console.log('추천하기 성공'),
    onError: err => console.log(err),
  });

  return {recommendMovieMutate};
};
export default useRecommendMovieMutation;
