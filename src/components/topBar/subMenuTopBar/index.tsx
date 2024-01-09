import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/colors';
import {StyleSheet, View} from 'react-native';

interface SubMenuTopBarProps {
  text: string;
  goback: () => void;
}

const SubMenuTopBar = ({text, goback}: SubMenuTopBarProps) => {
  return (
    <View style={styles.container}>
      <Typography style="Label1" color={palette.Text.Normal}>
        {text}
      </Typography>
      <SvgIcons.RightArrowIcon onPress={goback} />
    </View>
  );
};
export default SubMenuTopBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
