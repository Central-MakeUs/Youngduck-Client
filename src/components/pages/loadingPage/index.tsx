import EmptyItem from '@/components/items/emptyItem';
import {View} from 'react-native';
import {loadingPageStyles} from './LoadingPage.style';

const LoadingPage = () => {
  return (
    <View style={loadingPageStyles.loading}>
      <EmptyItem size="large" text="로딩중.." />
    </View>
  );
};
export default LoadingPage;
