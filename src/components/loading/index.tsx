import palette from '@/styles/theme/color';
import {ActivityIndicator, View} from 'react-native';
import {loadingStyles} from './Loading.style';

const Loading = () => {
  return (
    <View style={loadingStyles.container}>
      <ActivityIndicator
        style={loadingStyles.loading}
        color={palette.Primary.Normal}
      />
    </View>
  );
};
export default Loading;
