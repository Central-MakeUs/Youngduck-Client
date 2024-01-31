import {View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {TEngCategory} from '@/models/enums/category';
import {getCategory} from '@/utils/getCategory';
import {ScreeningTitleStyles} from './ScreeningTitle';

interface IDetailTitleProps {
  title: string;
  category: TEngCategory;
}
const ScreeningTitle = ({title, category}: IDetailTitleProps) => {
  return (
    <View style={ScreeningTitleStyles.container}>
      <Typography style="Label2" color={palette.Text.Normal}>
        {getCategory(category)}
      </Typography>
      <Typography style="Title2" color={palette.Text.Normal}>
        {title}
      </Typography>
    </View>
  );
};
export default ScreeningTitle;
