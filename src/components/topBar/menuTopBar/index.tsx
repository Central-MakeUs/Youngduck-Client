import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/colors';
import {View, StyleSheet} from 'react-native';

interface MenuTopBarProps {
  text: string;
  onPress: () => void;
}
const MenuTopBar = ({text, onPress}: MenuTopBarProps) => {
  return (
    <View style={styles.container}>
      <Typography style="Title1" color={palette.Text.Strong}>
        {text}
      </Typography>
      <SvgIcons.MenuIcon onPress={onPress} />
    </View>
  );
};
export default MenuTopBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});
