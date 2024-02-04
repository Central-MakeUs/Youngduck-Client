import {useEffect} from 'react';
import useUserMutation from './mutaions/useUserMutation';
import {showSnackBar} from '@/utils/showSnackBar';

const useCheckNicknameDuplication = (
  setIsDuplicated: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const {checkNicknameDuplication} = useUserMutation();
  const check = (nickname: string) => checkNicknameDuplication.mutate(nickname);

  useEffect(() => {
    if (checkNicknameDuplication?.data?.data?.duplicate === undefined) return;
    if (checkNicknameDuplication?.data?.data.duplicate) {
      showSnackBar('중복된 닉네임이에요');
      return;
    }
    setIsDuplicated(false);
  }, [checkNicknameDuplication?.data?.data]);

  return {check};
};

export default useCheckNicknameDuplication;
