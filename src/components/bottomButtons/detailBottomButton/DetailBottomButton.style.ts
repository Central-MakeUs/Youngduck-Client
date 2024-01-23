import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const detailBottomButtonStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    paddingTop: 12,
    paddingBottom: 20,
    borderTopWidth: 2,
    borderTopColor: palette.Primary.Alternative,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flex: 5.5,
  },
  right: {
    flex: 1,
  },
});
