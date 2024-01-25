import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {subTitleDescriptionStyles} from './SubTitleDescripiton.style';
import {KeyofText} from '@/types/theme/typography';

interface TextTopBarProps extends CommonMarginVerticalProps {
  text: string;
  subTitle: string;
  textStyle?: KeyofText;
  subTitleStyle?: KeyofText;
}
const SubTitleDescription = ({
  text,
  subTitle,
  textStyle = 'Subtitle2',
  subTitleStyle = 'Body1',
  mb,
  mt,
}: TextTopBarProps) => {
  return (
    <View
      style={{
        ...subTitleDescriptionStyles.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <Typography style={textStyle} color={palette.Text.Strong}>
        {text}
      </Typography>
      <Typography style={subTitleStyle} color={palette.Text.Alternative} mt={8}>
        {subTitle}
      </Typography>
    </View>
  );
};
export default SubTitleDescription;
