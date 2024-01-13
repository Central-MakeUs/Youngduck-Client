import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {subTitleDescriptionStyles} from './SubTitleDescripiton.style';

interface TextTopBarProps extends CommonMarginVerticalProps {
  subTitle: string;
  text: string;
}
const SubTitleDescription = ({text, subTitle, mb, mt}: TextTopBarProps) => {
  return (
    <View
      style={{
        ...subTitleDescriptionStyles.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <Typography style="Subtitle2" color={palette.Text.Strong}>
        {text}
      </Typography>
      <Typography style="Body1" color={palette.Text.Alternative} mt={8}>
        {subTitle}
      </Typography>
    </View>
  );
};
export default SubTitleDescription;
