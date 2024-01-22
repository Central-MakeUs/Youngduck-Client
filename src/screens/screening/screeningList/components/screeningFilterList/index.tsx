import Divider from '@/components/divider';
import ScreeningItem from '@/components/items/screeningItem';
import {View} from 'react-native';

const ScreeningFilterList = () => {
  return (
    <View>
      <ScreeningItem />
      <Divider height={2} mb={16} />
      <ScreeningItem />
      <ScreeningItem />
    </View>
  );
};
export default ScreeningFilterList;
