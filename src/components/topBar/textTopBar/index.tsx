import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {textStyles} from './TextTopBar.style';
import TopBarContainer from '@/components/container/topBarContainer';

interface TextTopBarProps extends CommonMarginVerticalProps {
  subTitle: string;
  text: string;
}
const TextTopBar = ({text, subTitle, mb, mt}: TextTopBarProps) => {
  return (
    <TopBarContainer>
      <View
        style={{
          ...textStyles.container,
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
    </TopBarContainer>
  );
};
export default TextTopBar;
