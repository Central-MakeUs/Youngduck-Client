import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const myPageScreenStyles = StyleSheet.create({
  paddingWrap: {paddingHorizontal: 16},
  nicknameContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  nicknameWrap: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: palette.Primary.Alternative,
    borderRadius: 8,
  },
  image: {width: 128, height: 120, alignSelf: 'center'},
  screeningWrap: {
    borderWidth: 1,
    borderColor: palette.Line.Normal,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 20,
    backgroundColor: palette.Another.White,
  },
  buttonWrap: {alignItems: 'center'},
  divider: {
    height: '100%',
    borderWidth: 0.5,
    borderColor: palette.Line.Assistive,
  },
  managePostsContainer: {
    paddingHorizontal: 24,
    borderRadius: 16,
    borderColor: palette.Line.Normal,
    borderWidth: 1,
    marginTop: 16,
  },
  settingButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default myPageScreenStyles;
