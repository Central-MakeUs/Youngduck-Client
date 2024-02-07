import {StyleSheet} from 'react-native';

const reviewTargetStyls = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  wrap: {
    justifyContent: 'space-between',
    flex: 1,
  },
  imageWrap: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: 68,
    height: 68,
  },
});

export default reviewTargetStyls;
