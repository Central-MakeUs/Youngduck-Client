import {View} from 'react-native';
import {dividerStyle} from './Divider.style';
import {CommonMarginVerticalProps} from '@/types/ui';

interface IDivider extends CommonMarginVerticalProps {
  height: number;
}

const Divider = ({mt, mb, height}: IDivider) => {
  return (
    <View
      style={{
        ...dividerStyle.container,
        height,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}
    />
  );
};
export default Divider;
