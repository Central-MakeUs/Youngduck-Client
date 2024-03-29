import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const myPageScreenStyles = StyleSheet.create({
  paddingWrap: {paddingHorizontal: 16, paddingTop: 16},
  nicknameContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  chipContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  genre: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    flexWrap: 'wrap',
    width: '70%',
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
});

export default myPageScreenStyles;
