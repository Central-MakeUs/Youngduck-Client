import Divider from '@/components/divider';
import ScreeningItem from '@/components/items/screeningItem';
import {ScrollView} from 'react-native';

const ScreeningFilterList = () => {
  return (
    <ScrollView>
      <ScreeningItem />
      <Divider height={2} mb={16} />
      <ScreeningItem />
      <Divider height={2} mb={16} />
      <ScreeningItem />
      <Divider height={2} mb={16} />
      <ScreeningItem />
    </ScrollView>
  );
};
export default ScreeningFilterList;
