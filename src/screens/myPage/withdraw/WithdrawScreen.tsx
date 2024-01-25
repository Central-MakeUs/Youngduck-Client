import TitleCenterTopBar from '@/components/topBar/titleCenterTopBar';
import useNavigator from '@/hooks/useNavigator';

const WithdrawScreen = () => {
  const {stackNavigation} = useNavigator();
  return (
    <>
      <TitleCenterTopBar title="탈퇴하기" />
    </>
  );
};

export default WithdrawScreen;
