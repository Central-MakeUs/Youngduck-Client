import Typography from '@/components/Typography';
import palette from '@/styles/colors';
import {StyleSheet, View} from 'react-native';

interface SubTitleTopBarProps {
  text: string;
  subTitle: string;
}
const SubTitleTopBar = ({text, subTitle}: SubTitleTopBarProps) => {
  return (
    <View style={styles.container}>
      <Typography style="Subtitle2" color={palette.Text.Strong}>
        {text}
      </Typography>
      <Typography style="Body1" color={palette.Text.Alternative} mt={8}>
        {subTitle}
      </Typography>
    </View>
  );
};
export default SubTitleTopBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    paddingVertical: 16,
    paddingLeft: 16,
  },
});
