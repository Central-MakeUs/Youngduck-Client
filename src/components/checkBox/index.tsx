import SvgIcons from '@/assets/svgIcons';
import palette from '@/styles/colors';
import {ICheckBox} from '@/types/ui';

import {Pressable, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    width: 24,
    height: 24,
    borderColor: palette.Line.Normal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContainer: {
    backgroundColor: palette.Primary.Normal,
    borderWidth: 0,
  },
});
