import {StyleSheet} from 'react-native';

export const weeklyStyles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 16,
    position: 'relative',
  },
  text: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 99,
    position: 'absolute',
    top: 8,
    left: 8,
  },
});
