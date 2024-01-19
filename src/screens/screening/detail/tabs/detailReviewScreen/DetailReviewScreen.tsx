import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {ScrollView, View} from 'react-native';
import {reviewScreenStyles} from './DetailReviewScreen.style';
import DefaultContainer from '@/components/container/defaultContainer';
import CommentItem from '@/components/items/commentItem';
import Divider from '@/components/divider';
import BoxButton from '@/components/buttons/boxButton';
import useNavigator from '@/hooks/useNavigator';
import ScreeningStackScreen from '@/constants/screeningStackScreen';

const DetailReviewScreen = () => {
  const {stackNavigation} = useNavigator();
  const handleGoScreeningList = () => {
    stackNavigation.navigate(ScreeningStackScreen.ScreeningListScreen);
  };
  return (
    <ScrollView>
      <DefaultContainer>
        <View style={reviewScreenStyles.title}>
          <Typography style="Subtitle2" color={palette.Another.Black}>
            관객 리뷰
          </Typography>
          <Typography style="Label1" color={palette.Primary.Deep} ml={8}>
            3
          </Typography>
        </View>
        <CommentItem />
        <Divider height={1} />
        <CommentItem />
        <Divider height={1} />
        <CommentItem />
        <View style={reviewScreenStyles.bottom}>
          <BoxButton onPress={handleGoScreeningList} variant="default">
            더보기
          </BoxButton>
        </View>
      </DefaultContainer>
    </ScrollView>
  );
};
export default DetailReviewScreen;
