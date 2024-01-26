import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';
import {ScreenRouteProp} from '@/types/navigator';

interface IManageReviewScreenProp {
  route: ScreenRouteProp<stackScreens.ManageReviewScreen>;
}

const ManageReviewScreen = ({route: {params}}: IManageReviewScreenProp) => {
  const {stackNavigation} = useNavigator();

  return (
    <>
      <BackTitleTopBar
        text="리뷰 관리"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
    </>
  );
};

export default ManageReviewScreen;
