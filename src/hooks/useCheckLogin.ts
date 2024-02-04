import {useLoginPopupStore} from '@/stores/loginPopup';
import {useUserStore} from '@/stores/user';

const useCheckLogin = () => {
  const {user} = useUserStore();
  const {setLoginPopup} = useLoginPopupStore();

  const checkLogin = (callback: () => void) => {
    if (user.isLookAround) {
      setLoginPopup(true);
      return;
    } else {
      callback();
    }
  };

  return {checkLogin};
};
export default useCheckLogin;
