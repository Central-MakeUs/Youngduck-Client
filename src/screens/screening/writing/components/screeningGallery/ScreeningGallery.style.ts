import {StyleSheet} from 'react-native';

export const galleryStyles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
