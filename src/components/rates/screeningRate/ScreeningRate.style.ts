import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

interface IScreeningRateStylesProps {
  tooltipHeight: number;
}

const screeningRateStyles = ({tooltipHeight}: IScreeningRateStylesProps) =>
  StyleSheet.create({
    container: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: palette.Text.Alternative,
      borderRadius: 16,
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 40,
    },
    screeningIndexWrap: {
      borderTopWidth: 0.5,
      borderColor: palette.Text.Alternative,
      width: '100%',
      justifyContent: 'flex-end',
      paddingTop: 4,
      marginTop: tooltipHeight,
    },
    tooltip: {
      position: 'absolute',
      flexDirection: 'column',
      alignItems: 'center',
    },
    screeningIndex: {
      width: 8,
      height: 8,
      borderRadius: 100,
      backgroundColor: palette.Primary.Normal,
    },
    reviewIconWrap: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 4,
      paddingHorizontal: 10,
      marginBottom: 24,
    },
    reviewIcon: {
      alignItems: 'center',
    },
  });

export default screeningRateStyles;
