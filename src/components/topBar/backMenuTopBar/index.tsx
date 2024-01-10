import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';

import palette from '@/styles/colors';
import {CommonTextProps} from '@/types/ui';
import {StyleSheet, View} from 'react-native';

interface BackMenuTopBarProps extends CommonTextProps {
  goBack: () => void;
  onPress: () => void;
}
const BackMenuTopBar = ({text, goBack, onPress}: BackMenuTopBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SvgIcons.BackArrowIcon onPress={goBack} />
        <Typography style="Subtitle2" color={palette.Another.Black} ml={8}>
          {text}
        </Typography>
      </View>
      <SvgIcons.MenuIcon onPress={onPress} />
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
});
