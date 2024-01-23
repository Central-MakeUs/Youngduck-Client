import {StyleSheet} from 'react-native';

export const screeningItemStyles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    borderRadius: 8,
    height: 64,
    marginRight: 12,
    width: 80,
  },
  content: {
    flex: 1.5,
  },
});
