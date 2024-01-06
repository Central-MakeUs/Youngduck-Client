import {IChip} from '@/types/chip';
import {StyleSheet, Text, View} from 'react-native';

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
      backgroundColor: '#FFFACC',
      textColor: '#E69200',
    },
    default: {
      backgroundColor: '#EBEBEA',
      textColor: '#757470',
    },
  };
  return (
    <View style={StyleSheet.compose(styles.container, chipStyle[state])}>
      <Text>{text}</Text>
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
