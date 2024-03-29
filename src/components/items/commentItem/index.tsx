import {Pressable, View} from 'react-native';

import Chip from '@/components/chip';
import Profile from '@/components/profile';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {commentItemStyles} from './CommentItem.style';
import {defaultImages} from '@/assets';
import {useUserStore} from '@/stores/user';

interface ICommentItemProps {
  userId: number;
  nickName: string;
  profileImgNum: number;
  afterScreening: boolean;
  review: string;
  createdAt: string;
  totalComments: number;
  idx: number;
  complainOnPress: () => void;
}

const CommentItem = ({
  totalComments,
  nickName,
  profileImgNum,
  afterScreening,
  review,
  createdAt,
  idx,
  complainOnPress,
}: ICommentItemProps) => {
  const {user} = useUserStore();
  const isWithdrawUser = nickName.includes('삭제한 유저');
  return (
    <View
      style={[
        commentItemStyles.container,
        {borderBottomWidth: idx === totalComments - 1 ? 0 : 1},
      ]}>
      <View style={commentItemStyles.profileContentWrap}>
        <Profile
          size="large"
          profile={defaultImages[`profile${profileImgNum}`]}
        />
        <View style={commentItemStyles.label}>
          <View style={commentItemStyles.name}>
            <Typography
              style="Label1"
              color={
                isWithdrawUser ? palette.Text.Assistive : palette.Text.Strong
              }>
              {isWithdrawUser ? '탈퇴한 유저' : nickName}
            </Typography>
            {user.nickname !== nickName && (
              <Pressable onPress={complainOnPress}>
                <Typography style="Chips1" color={palette.Text.Alternative}>
                  신고
                </Typography>
              </Pressable>
            )}
          </View>
          <Chip
            text={afterScreening ? '기대만큼 좋았어요' : '기대보다 아쉬웠어요'}
            state={afterScreening ? 'primary' : 'default'}
          />
        </View>
      </View>
      {review && (
        <Typography style="Body1" color={palette.Text.Normal} mt={8}>
          {review}
        </Typography>
      )}

      <Typography style="Body2" color={palette.Text.Alternative} mt={12}>
        {createdAt}
      </Typography>
    </View>
  );
};
export default CommentItem;
