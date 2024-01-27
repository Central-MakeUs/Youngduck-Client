import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import useNavigator from '@/hooks/useNavigator';

const MyScreeningScreen = () => {
  const {stackNavigation} = useNavigator();

  return (
    <>
      <BackTitleTopBar
        text="나의 스크리닝"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
    </>
  );
};

export default MyScreeningScreen;
