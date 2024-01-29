import {postVoteMovie} from '@/apis/popcornParty';
import {useMutation} from '@tanstack/react-query';

const useVoteMovieMutation = () => {
  const {mutate: voteMovieMutate} = useMutation({
    mutationFn: postVoteMovie,
    onSuccess: () => console.log('추천하기 성공'),
    onError: err => console.log(err),
  });

  return {voteMovieMutate};
};
export default useVoteMovieMutation;
