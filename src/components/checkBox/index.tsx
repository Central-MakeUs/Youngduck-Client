import SvgIcons from '@/assets/svgIcons';
import {ICheckBox} from '@/types/checkBox';
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
    borderColor: '#E6E6E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContainer: {
    backgroundColor: '#FFCC00',
    borderColor: 'white',
  },
});
