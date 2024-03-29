import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const popupStyles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: palette.Another.White,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: palette.Primary.Normal,
    paddingTop: 24,
    paddingBottom: 16,
    width: '85%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    //marginHorizontal: 32,
  },
});
