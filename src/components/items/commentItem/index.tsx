import Chip from '@/components/chip';
import Profile from '@/components/profile';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Pressable, View} from 'react-native';
import {commentItemStyles} from './CommentItem.style';

interface ICommentItemProps {
  totalComments: number;
  nickname: string;
  isSatisfied: boolean;
  review: string;
  date: string;
  idx: number;
}

const CommentItem = ({
  totalComments,
  nickname,
  isSatisfied,
  review,
  date,
  idx,
}: ICommentItemProps) => {
  return (
    <View
      style={[
        commentItemStyles.container,
        {borderBottomWidth: idx === totalComments - 1 ? 0 : 1},
      ]}>
      <View style={commentItemStyles.profileContentWrap}>
        <Profile size="large" />
        <View style={commentItemStyles.label}>
          <View style={commentItemStyles.name}>
            <Typography style="Label1" color={palette.Text.Strong}>
              {nickname}
            </Typography>
            <Pressable>
              <Typography style="Chips1" color={palette.Text.Alternative}>
                신고
              </Typography>
            </Pressable>
          </View>
          <Chip
            text={isSatisfied ? '기대만큼 좋았어요' : '기대보다 아쉬웠어요'}
            state={isSatisfied ? 'primary' : 'default'}
          />
        </View>
      </View>

      <Typography style="Body1" color={palette.Text.Normal} mt={8}>
        {review}
      </Typography>
      <Typography style="Body2" color={palette.Text.Alternative} mt={12}>
        {date}
      </Typography>
    </View>
  );
};
export default CommentItem;
