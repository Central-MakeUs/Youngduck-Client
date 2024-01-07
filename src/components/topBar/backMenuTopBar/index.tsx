import SvgIcons from '@/assets/svgIcons';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface BackMenuTopBarProps {
  text: string;
  goBack: () => void;
  onPress: () => void;
}
const BackMenuTopBar = ({text, goBack, onPress}: BackMenuTopBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.8} onPress={goBack}>
          <SvgIcons.BackArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{text}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <SvgIcons.MenuIcon />
      </TouchableOpacity>
    </View>
  );
};
export default BackMenuTopBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 8,
  },
});
