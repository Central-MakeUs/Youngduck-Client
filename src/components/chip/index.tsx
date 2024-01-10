import {StyleSheet, View} from 'react-native';
import Typography from '../typography';
import palette from '@/styles/colors';
import {CommonTextProps, IChip} from '@/types/ui';

interface ChipProps extends CommonTextProps {
  state?: IChip;
}

interface ChipStyle {
  backgroundColor: string;
  textColor: string;
}

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

const Chip = ({state = 'primary', text}: ChipProps) => {
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
