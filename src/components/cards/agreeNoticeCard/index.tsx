import {View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import CheckBox from '@/components/checkBox';

import {noticeCardStyles} from './NoticeCard.style';

interface INoticeCardProps {
  value: boolean;
  content: string;
  onChangeValue: () => void;
}

const AgreeNoticeCard = ({value, content, onChangeValue}: INoticeCardProps) => {
  return (
    <View style={noticeCardStyles.wrapper}>
      <View style={noticeCardStyles.content}>
        <Typography style="Label1" color={palette.Text.Normal}>
          게시글 정책을 확인했어요.
        </Typography>
        <CheckBox state={value ? 'on' : 'off'} onPress={onChangeValue} />
      </View>
      <Typography style="Body2" color={palette.Text.Alternative} mt={4}>
        {content}
      </Typography>
    </View>
  );
};
export default AgreeNoticeCard;
