import {IChip} from '@/types/chip';
import {StyleSheet, View} from 'react-native';
import Typography from '../typography';
import palette from '@/styles/colors';

interface ChipProps {
  state?: IChip;
  text: string;
}

interface ChipStyle {
  backgroundColor: string;
  textColor: string;
}

const Chip = ({state = 'primary', text}: ChipProps) => {
  const chipStyle: Record<IChip, ChipStyle> = {
    primary: {
      backgroundColor: palette.Primary.Assistive,
      textColor: palette.Primary.Dark,
    },
    default: {
      backgroundColor: palette.Fill.Normal,
      textColor: palette.Text.Alternative,
    },
  };
  return (
    <View style={StyleSheet.compose(styles.container, chipStyle[state])}>
      <Typography style="Label3" color={chipStyle[state].textColor}>
        {text}
      </Typography>
    </View>
  );
};
export default Chip;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
