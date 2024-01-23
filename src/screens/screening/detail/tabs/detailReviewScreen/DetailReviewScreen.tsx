import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {ScrollView, View} from 'react-native';
import {reviewScreenStyles} from './DetailReviewScreen.style';
import DefaultContainer from '@/components/container/defaultContainer';
import CommentItem from '@/components/items/commentItem';
import Divider from '@/components/divider';
import BoxButton from '@/components/buttons/boxButton';

const DetailReviewScreen = () => {
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
        <CommentItem
          totalComments={3}
          nickname="팝코니"
          isSatisfied={true}
          review="리븉내용"
          date="20203-"
          idx={0}
        />
        <CommentItem
          totalComments={3}
          nickname="팝코니"
          isSatisfied={true}
          review="리븉내용"
          date="20203-"
          idx={1}
        />
        <CommentItem
          totalComments={3}
          nickname="팝코니"
          isSatisfied={true}
          review="리븉내용"
          date="20203-"
          idx={2}
        />
        <View style={reviewScreenStyles.bottom}>
          <BoxButton onPress={() => {}} variant="default">
            더보기
          </BoxButton>
        </View>
      </DefaultContainer>
    </ScrollView>
  );
};
export default DetailReviewScreen;
