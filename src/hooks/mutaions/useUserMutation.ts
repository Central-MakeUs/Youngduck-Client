import {postLoginUser, postRegisterUser} from '@/apis/auth/auth';
import {useMutation} from '@tanstack/react-query';
import useNavigator from '../useNavigator';
import stackScreens from '@/constants/stackScreens';
import {setIsInstalled} from '@/services/localStorage/localStorage';
import {IRegisterMutationProps} from '@/types/user';
import {useUserStore} from '@/stores/user';

const useUserMutation = () => {
  const {stackNavigation} = useNavigator();
  const {user} = useUserStore();

  const {mutate: loginMutate} = useMutation({
    mutationFn: postLoginUser,
    onSuccess: login => {
      if (!login.data.canLogin) {
        stackNavigation.navigate(stackScreens.SignupScreen, {
          idToken: login.data.idToken,
        });
      } else {
        setIsInstalled(true);
        stackNavigation.navigate(stackScreens.BottomTabScreens);
      }
    },
    onError: err => console.log(err),
  });

  const {mutate: signupMutate} = useMutation({
    mutationFn: (sendData: IRegisterMutationProps) =>
      postRegisterUser(sendData.type, sendData.idToken, sendData.body),
    onSuccess: data => {
      console.log('회원가입 성공');
      loginMutate({type: user.type, token: data.data.accessToken});
      console.log(data);
      stackNavigation.navigate(stackScreens.SignupCompleteScreen);
    },
    onError: err => console.log(err),
  });

  return {loginMutate, signupMutate};
};

export default useUserMutation;
