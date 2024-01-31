import {postComplainUser} from '@/apis/popcornParty/detail/detail';
import {useMutation} from '@tanstack/react-query';

const usePopcornPartyMutation = () => {
  const {mutate: complainUserMutate} = useMutation({
    mutationFn: postComplainUser,
    onSuccess: () => console.log('신고 성공'),
    onError: err => console.log(err),
  });

  return {complainUserMutate};
};

export default usePopcornPartyMutation;
