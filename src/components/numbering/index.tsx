import {StyleSheet, View} from 'react-native';
import Typography from '../typography';
import palette from '@/styles/colors';
import {CommonTextProps} from '@/types/ui';

const Numbering = ({text}: CommonTextProps) => {
  return (
    <View
      style={[
        stlyes.container,
        text.length === 1 ? {paddingHorizontal: 8} : {paddingHorizontal: 4},
      ]}>
      <Typography style="Label1" color={palette.Another.White}>
        {text}
      </Typography>
    </View>
  );
};
export default Numbering;

const stlyes = StyleSheet.create({
  container: {
    borderRadius: 99,
    backgroundColor: palette.Primary.Normal,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
