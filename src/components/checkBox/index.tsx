import SvgIcons from '@/assets/svgIcons';
import {ICheckBox} from '@/types/ui';

import {Pressable, StyleSheet} from 'react-native';
import {checkBoxStyles} from './CheckBox.style';

interface CheckBoxProps {
  onPress: () => void;
  state: ICheckBox;
}

const CheckBox = ({onPress, state}: CheckBoxProps) => {
  return (
    <Pressable
      style={
        state === 'off'
          ? checkBoxStyles.container
          : StyleSheet.compose(
              checkBoxStyles.container,
              checkBoxStyles.activeContainer,
            )
      }
      onPress={onPress}>
      {state === 'on' && <SvgIcons.RectangleIcon />}
      {state === 'indeterminate' && <SvgIcons.LineIcon />}
    </Pressable>
  );
};
export default CheckBox;