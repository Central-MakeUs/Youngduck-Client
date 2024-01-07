import SvgIcons from '@/assets/svgIcons';
import {View, Text, StyleSheet, Pressable} from 'react-native';

interface MenuTopBarProps {
  text: string;
  onPress: () => void;
}
const MenuTopBar = ({text, onPress}: MenuTopBarProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Pressable onPress={onPress}>
        <SvgIcons.MenuIcon />
      </Pressable>
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
