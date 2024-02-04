import useNavigator from '@/hooks/useNavigator';
import Popup from '../popup';
import stackScreens from '@/constants/stackScreens';

interface ILoginPopupProps {
  loginPopup: boolean;
  setLoginPopup: (value: boolean) => void;
}
const LoginPopup = ({loginPopup, setLoginPopup}: ILoginPopupProps) => {
  const {stackNavigation} = useNavigator();
  return (
    <Popup
      title="로그인이 필요한 기능이에요"
      content={`모든 기능을 이용하려면\n회원가입 및 로그인이 필요해요`}
      onClose={() => {
        setLoginPopup(false);
      }}
      isVisible={loginPopup}
      onPress={() => {
        setLoginPopup(false);
        stackNavigation.navigate(stackScreens.LoginScreen);
      }}
    />
  );
};
export default LoginPopup;
