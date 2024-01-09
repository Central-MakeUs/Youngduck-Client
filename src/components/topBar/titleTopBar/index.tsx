import Typography from '@/components/Typography';
import palette from '@/styles/colors';
import {StyleSheet, View} from 'react-native';

interface TitleTopBarProp {
  text: string;
}
const TitleTopBar = ({text}: TitleTopBarProp) => {
  return (
    <View style={styles.container}>
      <Typography style="Subtitle2" color={palette.Another.Black}>
        {text}
      </Typography>
    </View>
  );
};
export default TitleTopBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingLeft: 16,
    alignItems: 'flex-start',
  },
});
