import BoxButton from '@/components/buttons/boxButton';
import DefaultContainer from '@/components/container/defaultContainer';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';
import {useLoginPopupStore} from '@/stores/loginPopup';
import {useUserStore} from '@/stores/user';
import {useQueryClient} from '@tanstack/react-query';

const OtherPopcorns = () => {
  const {stackNavigation} = useNavigator();
  const queryClient = useQueryClient();
  const {user} = useUserStore();
  const {setLoginPopup} = useLoginPopupStore();

  const goToRecommandListScreen = () => {
    stackNavigation.navigate(stackScreens.RecommandListScreen);
    queryClient.removeQueries({queryKey: ['popcornOfNextWeek']});
  };

  const goToWriteRecommandScreen = () => {
    if (user.isLookAround) {
      setLoginPopup(true);
    } else {
      stackNavigation.navigate(stackScreens.WriteRecommandScreen);
    }
  };

  return (
    <DefaultContainer>
      <BoxButton
        onPress={goToRecommandListScreen}
        variant="default"
        mt={12}
        mb={8}>
        투표작 모두 보기
      </BoxButton>
      <BoxButton onPress={goToWriteRecommandScreen} mb={32}>
        다른 작품 추천하기
      </BoxButton>
    </DefaultContainer>
  );
};

export default OtherPopcorns;
