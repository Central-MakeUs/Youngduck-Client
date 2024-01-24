import {View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import CheckBox from '@/components/checkBox';

import {noticeCardStyles} from './NoticeCard.style';

interface INoticeCardProps {
  value: boolean;
  title: string;
  content: string;
  onChangeValue: () => void;
}

const NoticeCard = ({
  value,
  title,
  content,
  onChangeValue,
}: INoticeCardProps) => {
  return (
    <View>
      <View style={noticeCardStyles.content}>
        <Typography style="Label1" color={palette.Text.Normal}>
          {title}
        </Typography>
        <CheckBox state={value ? 'on' : 'off'} onPress={onChangeValue} />
      </View>
      <Typography style="Body2" color={palette.Text.Alternative} mt={4}>
        {content}
      </Typography>
    </View>
  );
};
export default NoticeCard;
