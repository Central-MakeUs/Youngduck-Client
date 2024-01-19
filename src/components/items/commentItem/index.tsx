import Chip from '@/components/chip';
import Profile from '@/components/profile';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';
import {commentItemStyles} from './CommentItem.style';

const CommentItem = () => {
  return (
    <View style={commentItemStyles.container}>
      <View style={commentItemStyles.name}>
        <Profile size="large" />
        <View style={commentItemStyles.label}>
          <View style={commentItemStyles.name}>
            <Typography style="Label1" color={palette.Text.Strong}>
              팝코니
            </Typography>
            <Typography style="Label3" color={palette.Primary.Deep} ml={4}>
              Lv.5
            </Typography>
          </View>
          <Chip text="기대만큼 좋았어요" />
        </View>
      </View>

      <Typography style="Body1" color={palette.Text.Normal} mt={8}>
        내가 쓴 리뷰는 리스트 최상단에 고정될꼬얌
      </Typography>
      <Typography style="Body2" color={palette.Text.Alternative} mt={12}>
        2024. 01. 10
      </Typography>
    </View>
  );
};
export default CommentItem;
