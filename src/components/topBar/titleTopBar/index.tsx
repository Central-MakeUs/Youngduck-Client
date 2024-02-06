import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {titleStyles} from './TitleTopBar.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface TitleTopBarProps extends CommonMarginVerticalProps {
  text: string;
}
const TitleTopBar = ({text, mb, mt}: TitleTopBarProps) => {
  const {top} = useSafeAreaInsets();
  const style = titleStyles({top});
  return (
    <View
      style={{
        ...style.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <Typography style="Title1" color={palette.Another.Black}>
        {text}
      </Typography>
    </View>
  );
};
export default TitleTopBar;
