import {postJjimOff} from '@/apis/myPage';
import {useMutation, useQueryClient} from '@tanstack/react-query';

const useManageScreeningMutation = () => {
  const queryClient = useQueryClient();
  const {mutate: jjimOffMutate} = useMutation({
    mutationFn: postJjimOff,
    onSuccess: () => {
      queryClient.removeQueries({queryKey: ['watchedScreeningData']});
      queryClient.removeQueries({queryKey: ['jjimScreeningData']});
    },
    onError: err => console.log(err),
  });

  return {jjimOffMutate};
};

export default useManageScreeningMutation;
