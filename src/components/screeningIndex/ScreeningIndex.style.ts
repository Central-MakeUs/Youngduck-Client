import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

interface IScreeningStylesProps {
  tooltipHeight: number;
  screeningIndexLocation: number;
}

const screeningIndexStyles = ({
  tooltipHeight,
  screeningIndexLocation,
}: IScreeningStylesProps) =>
  StyleSheet.create({
    container: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: palette.Text.Alternative,
      borderRadius: 16,
      alignItems: 'center',
    },
    screeningIndexWrap: {
      borderTopWidth: 0.5,
      borderColor: palette.Text.Assistive,
      width: '100%',
      justifyContent: 'flex-end',
      paddingTop: 4,
      marginTop: tooltipHeight,
    },
    tooltip: {
      position: 'absolute',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: screeningIndexLocation,
    },
    screeningIndex: {
      width: 8,
      height: 8,
      borderRadius: 100,
      backgroundColor: palette.Primary.Normal,
    },
  });

export default screeningIndexStyles;
