import {StyleSheet} from 'react-native';

export const recentStyles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 132,
    borderRadius: 8,
    height: 88,
    marginRight: 8,
    flex: 1,
  },
  content: {
    flex: 1.5,
  },
});
