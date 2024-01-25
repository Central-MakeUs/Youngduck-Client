import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import BackTopBar from '@/components/topBar/backTopBar';
import useNavigator from '@/hooks/useNavigator';

const WithdrawScreen = () => {
  const {stackNavigation} = useNavigator();
  return (
    <>
      <BackTitleTopBar
        goBack={stackNavigation.goBack}
        text="탈퇴하기"
        opacity={0}
      />
    </>
  );
};

export default WithdrawScreen;
