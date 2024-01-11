import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {textStyles} from './TextTopBar.style';

interface TextTopBarProps extends CommonTextProps {
  subTitle: string;
}
const TextTopBar = ({text, subTitle}: TextTopBarProps) => {
  return (
    <View style={textStyles.container}>
      <Typography style="Subtitle2" color={palette.Text.Strong}>
        {text}
      </Typography>
      <Typography style="Body1" color={palette.Text.Alternative} mt={8}>
        {subTitle}
      </Typography>
    </View>
  );
};
export default TextTopBar;
