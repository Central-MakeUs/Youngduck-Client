import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {subTitleStyles} from './SubTitle.style';

interface SubTitleTopBarProps extends CommonMarginVerticalProps {
  text: string;
}
const SubTitle = ({text, mb, mt}: SubTitleTopBarProps) => {
  return (
    <View
      style={{
        ...subTitleStyles.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <Typography style="Subtitle2" color={palette.Text.Strong}>
        {text}
      </Typography>
    </View>
  );
};
export default SubTitle;
