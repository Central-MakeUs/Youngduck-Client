import {StyleSheet} from 'react-native';

const commonImageProps = {
  borderRadius: 16,
  marginLeft: 16,
};

export const popcornContainerStyles = StyleSheet.create({
  'without-ranking': {
    marginLeft: commonImageProps.marginLeft,
    width: 108,
  },
  'with-ranking': {
    marginLeft: commonImageProps.marginLeft,
    width: 92,
  },
});

export const popcornImageStyles = StyleSheet.create({
  'without-ranking': {
    borderRadius: commonImageProps.borderRadius,
    width: 108,
    height: 160,
  },
  'with-ranking': {
    borderRadius: commonImageProps.borderRadius,
    width: 92,
    height: 136,
  },
});
