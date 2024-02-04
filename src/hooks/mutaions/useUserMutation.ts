import {
  deleteUser,
  postLoginUser,
  postLogoutUser,
  postRegisterUser,
} from '@/apis/auth/auth';
import {useMutation} from '@tanstack/react-query';
import useNavigator from '../useNavigator';
import stackScreens from '@/constants/stackScreens';
import {setIsInstalled} from '@/services/localStorage/localStorage';
import {IRegisterMutationProps} from '@/types/user';
import {useUserStore} from '@/stores/user';
import {showSnackBar} from '@/utils/showSnackBar';
import {ResponseErrorAPI} from '@/models/common/responseDTO';
import {AxiosError} from 'axios';

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

  const logoutUser = useMutation({
    mutationFn: postLogoutUser,

    onError: err => {
      const errorResponse = (err as AxiosError).response;
      if (errorResponse) {
        const error = errorResponse.data as ResponseErrorAPI;
        if (error.status === 500 && error.code === 'GLOBAL_500_3') {
          stackNavigation.navigate(stackScreens.LoginScreen);
          showSnackBar('정상적으로 로그아웃 되었어요');
        }
      }
    },
  });

  const quitUser = useMutation({
    mutationFn: deleteUser,
    onError: err => {
      const errorResponse = (err as AxiosError).response;
      if (errorResponse) {
        const error = errorResponse.data as ResponseErrorAPI;
        if (error.status === 500 && error.code === 'GLOBAL_500_3') {
          stackNavigation.navigate(stackScreens.LoginScreen);
          showSnackBar('정상적으로 계정 탈퇴되었어요');
        }
      }
    },
  });

  return {loginMutate, signupMutate, logoutUser, quitUser};
};
export default useUserMutation;
