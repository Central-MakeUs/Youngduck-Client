import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {top} = useSafeAreaInsets();

const topBarContainerStyle = StyleSheet.create({
  container: {
    paddingTop: top,
  },
});

export default topBarContainerStyle;
