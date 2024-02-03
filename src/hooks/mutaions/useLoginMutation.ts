import {postLoginUser} from '@/apis/auth/auth';
import {useMutation} from '@tanstack/react-query';
import useNavigator from '../useNavigator';
import stackScreens from '@/constants/stackScreens';
import {setIsInstalled} from '@/services/localStorage/localStorage';

const useLoginMutation = () => {
  const {stackNavigation} = useNavigator();

  const {mutate: loginMutate} = useMutation({
    mutationFn: postLoginUser,
    onSuccess: login => {
      if (!login.data.canLogin) {
        stackNavigation.navigate(stackScreens.SignupScreen);
      } else {
        setIsInstalled(true);
        stackNavigation.navigate(stackScreens.BottomTabScreens);
      }
    },
    onError: err => console.log(err),
  });

  return {loginMutate};
};

export default useLoginMutation;
