import {StyleSheet} from 'react-native';

const commonImageProps = {
  borderRadius: 16,
  marginBottom: 4,
};

export const popcornContainerStyles = StyleSheet.create({
  'without-ranking': {
    width: 108,
    marginLeft: 16,
  },
  'with-ranking': {
    width: 92,
    marginLeft: 16,
  },
});

export const popcornImageStyles = StyleSheet.create({
  'without-ranking': {
    ...commonImageProps,
    width: 108,
    height: 160,
  },
  'with-ranking': {
    ...commonImageProps,
    width: 92,
    height: 136,
  },
});
