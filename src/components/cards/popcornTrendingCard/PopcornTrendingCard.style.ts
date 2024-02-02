import {StyleSheet} from 'react-native';

const commonImageProps = {
  borderRadius: 16,
  marginBottom: 4,
};

export const popcornTrendingCardStyles = StyleSheet.create({
  firstContainer: {
    marginHorizontal: 16,
  },
  largeContainer: {
    width: 108,
    marginRight: 16,
  },
  mediumContainer: {
    width: 92,
    marginRight: 16,
  },
  largeImage: {
    ...commonImageProps,
    width: 108,
    height: 160,
  },
  mediumImage: {
    ...commonImageProps,
    width: 92,
    height: 136,
  },
});
