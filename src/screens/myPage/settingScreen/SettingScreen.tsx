import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import useNavigator from '@/hooks/useNavigator';

const SettingScreen = () => {
  const {stackNavigation} = useNavigator();
  return (
    <>
      <BackTitleTopBar
        text="설정"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
    </>
  );
};

export default SettingScreen;
