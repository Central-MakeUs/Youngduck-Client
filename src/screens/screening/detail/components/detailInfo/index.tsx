import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';

interface IDetailInfo {
  title: string;
  content: string;
}
const DetailInfo = ({title, content}: IDetailInfo) => {
  return (
    <View>
      <Typography style="Label3" color={palette.Text.Normal} mt={8}>
        {title}
      </Typography>
      <Typography style="Body2" color={palette.Text.Normal} mt={4}>
        {content}
      </Typography>
    </View>
  );
};
export default DetailInfo;
