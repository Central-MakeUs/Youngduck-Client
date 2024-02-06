import {
  deleteUser,
  postLoginUser,
  postLogoutUser,
  postRegisterUser,
} from '@/apis/auth/auth';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import useNavigator from '../useNavigator';
import stackScreens from '@/constants/stackScreens';
import {
  removeTokens,
  setIsInstalled,
} from '@/services/localStorage/localStorage';
import {IRegisterMutationProps} from '@/types/user';
import {useUserStore} from '@/stores/user';
import {showSnackBar} from '@/utils/showSnackBar';
import {patchMarketing, postNickname, updateNickname} from '@/apis/user/user';

const useUserMutation = () => {
  const {stackNavigation} = useNavigator();
  const {user, setUser} = useUserStore();
  const queryClient = useQueryClient();

  const {mutate: loginMutate} = useMutation({
    mutationFn: postLoginUser,
    onSuccess: login => {
      setUser({...user, isLookAround: false});
      if (!login.data.canLogin) {
        if (user.email === null) {
          showSnackBar('"설정 > Apple ID 사용 중단" 후 시도해 주세요');
          return;
        }
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
      console.log(data);
      stackNavigation.navigate(stackScreens.SignupCompleteScreen);
    },
    onError: err => console.log(err),
  });

  const logoutUser = useMutation({
    mutationFn: postLogoutUser,

    onSuccess: async () => {
      stackNavigation.popToTop();
      showSnackBar('정상적으로 로그아웃 되었어요');
      await removeTokens();
    },
  });

  const quitUser = useMutation({
    mutationFn: deleteUser,
    onSuccess: async () => {
      stackNavigation.popToTop();
      showSnackBar('정상적으로 계정 탈퇴되었어요');
      await removeTokens();
    },
  });

  const patchAgreement = useMutation({
    mutationFn: patchMarketing,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['userInfo']});
    },
  });

  const checkNicknameDuplication = useMutation({
    mutationFn: postNickname,
    onSuccess: res => console.log(res),
    onError: e => console.log(e),
  });

  const {mutate: updateNicknameMutate} = useMutation({
    mutationFn: updateNickname,
    onSuccess: res => console.log(res),
    onError: e => console.log(e),
  });

  return {
    loginMutate,
    signupMutate,
    logoutUser,
    checkNicknameDuplication,
    updateNicknameMutate,
    quitUser,
    patchAgreement,
  };
};
export default useUserMutation;
