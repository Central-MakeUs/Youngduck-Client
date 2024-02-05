import palette from '@/styles/theme/color';
import {KeyofText} from '@/types/theme/typography';
import {StyleSheet} from 'react-native';

interface ITypeTooltip {
  textColor: string;
  backgroundColor: string;
  font: KeyofText;
}

export const tooltipTypeStyles: Record<'secondary' | 'primary', ITypeTooltip> =
  {
    primary: {
      textColor: palette.Primary.Dark,
      backgroundColor: palette.Primary.Normal,
      font: 'Label3',
    },
    secondary: {
      textColor: palette.Another.White,
      backgroundColor: 'rgba(32, 31, 30, 0.7)',
      font: 'Body2',
    },
  };
const tooltipStyles = StyleSheet.create({
  container: {
    marginBottom: 4,
    //alignItems: 'center',
    //alignItems: 'flex-end',
  },
  typographyWrap: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: palette.Primary.Normal,
    alignSelf: 'flex-start',
  },
});

export default tooltipStyles;
