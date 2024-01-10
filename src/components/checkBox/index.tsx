import SvgIcons from '@/assets/svgIcons';
import {ICheckBox} from '@/types/ui';

import {Pressable, StyleSheet} from 'react-native';
import {styles} from './CheckBox.style';

interface CheckBoxProps {
  onPress: () => void;
  state: ICheckBox;
}

const CheckBox = ({onPress, state}: CheckBoxProps) => {
  return (
    <Pressable
      style={
        state === 'off'
          ? styles.container
          : StyleSheet.compose(styles.container, styles.activeContainer)
      }
      onPress={onPress}>
      {state === 'on' && <SvgIcons.RectangleIcon />}
      {state === 'indeterminate' && <SvgIcons.LineIcon />}
    </Pressable>
  );
};
export default CheckBox;
