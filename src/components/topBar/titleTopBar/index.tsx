import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {StyleSheet, View} from 'react-native';

const TitleTopBar = ({text}: CommonTextProps) => {
  return (
    <View style={styles.container}>
      <Typography style="Subtitle2" color={palette.Another.Black}>
        {text}
      </Typography>
    </View>
  );
};
export default TitleTopBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingLeft: 16,
    alignItems: 'flex-start',
  },
});
