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
  image: {
    width: 68,
    height: 68,
    borderRadius: 16,
  },
});

export default reviewTargetStyls;
