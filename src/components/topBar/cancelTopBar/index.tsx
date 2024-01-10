import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';

import palette from '@/styles/colors';
import {CommonTextProps} from '@/types/ui';
import {StyleSheet, View} from 'react-native';

interface CancelTopBarProps extends CommonTextProps {
  onPress: () => void;
}

const CancelTopBar = ({text, onPress}: CancelTopBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Typography style="Label1" color={palette.Another.Black}>
          {text}
        </Typography>
      </View>
      <SvgIcons.CancelIcon onPress={onPress} />
    </View>
  );
};
export default CancelTopBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
