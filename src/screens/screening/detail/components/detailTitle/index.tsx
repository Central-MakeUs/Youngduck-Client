import {View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {TEngCategory} from '@/models/enums/category';

import {detailTitleStyles} from './DetailTitle.style';
import {getCategory} from '@/utils/getCategory';
interface IDetailTitleProps {
  title: string;
  category: TEngCategory;
}
const DetailTitle = ({title, category}: IDetailTitleProps) => {
  return (
    <View style={detailTitleStyles.container}>
      <Typography style="Label2" color={palette.Text.Normal}>
        {getCategory(category)}
      </Typography>
      <Typography style="Title2" color={palette.Text.Normal}>
        {title}
      </Typography>
    </View>
  );
};
export default DetailTitle;
