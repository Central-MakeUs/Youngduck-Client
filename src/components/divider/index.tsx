import {View} from 'react-native';
import {dividerStyle} from './Divider.style';
import {CommonMarginVerticalProps} from '@/types/ui';

const Divider = ({mt, mb}: CommonMarginVerticalProps) => {
  return (
    <View
      style={{
        ...dividerStyle.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}
    />
  );
};
export default Divider;
