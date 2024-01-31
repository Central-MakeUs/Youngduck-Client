import BoxButton from '@/components/buttons/boxButton';
import DefaultContainer from '@/components/container/defaultContainer';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';

interface IDetailBottomButtonsProps {
  id: number;
  poster: string;
  title: string;
  directorname: string;
}

const DetailBottomButtons = ({
  id,
  poster,
  title,
  directorname,
}: IDetailBottomButtonsProps) => {
  const {stackNavigation} = useNavigator();
  return (
    <DefaultContainer>
      <BoxButton
        onPress={() =>
          stackNavigation.navigate(stackScreens.WriteRecommandScreen)
        }
        variant="secondary">
        다른 작품 추천하기
      </BoxButton>
      <BoxButton
        onPress={() =>
          stackNavigation.navigate(stackScreens.WriteReviewScreen, {
            id,
            poster,
            title,
            directorname,
          })
        }
        mt={22}>
        나도 리뷰쓰기
      </BoxButton>
    </DefaultContainer>
  );
};

export default DetailBottomButtons;
