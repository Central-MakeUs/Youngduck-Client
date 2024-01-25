import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';
import {detailTitleStyles} from './DetailTitle.style';

const DetailTitle = () => {
  return (
    <View style={detailTitleStyles.container}>
      <Typography style="Label2" color={palette.Text.Normal}>
        상영전
      </Typography>
      <Typography style="Title2" color={palette.Text.Normal}>
        Dromapic 상영회
      </Typography>
    </View>
  );
};
export default DetailTitle;
