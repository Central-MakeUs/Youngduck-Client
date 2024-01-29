import BoxButton from '@/components/buttons/boxButton';
import DefaultContainer from '@/components/container/defaultContainer';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';

const OtherPopcorns = () => {
  const {stackNavigation} = useNavigator();

  const goToRecommandListScreen = () =>
    stackNavigation.navigate(stackScreens.RecommandListScreen);

  return (
    <DefaultContainer>
      <BoxButton
        onPress={goToRecommandListScreen}
        variant="default"
        mt={12}
        mb={8}>
        5건의 투표작 모두 보기
      </BoxButton>
      <BoxButton
        onPress={() =>
          stackNavigation.navigate(stackScreens.WriteRecommandScreen)
        }
        mb={32}>
        다른 작품 추천하기
      </BoxButton>
    </DefaultContainer>
  );
};

export default OtherPopcorns;
