import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {titleStyles} from './TitleTopBar.style';
import Profile from '@/components/profile';

const TitleTopBar = ({text}: CommonTextProps) => {
  return (
    <View style={titleStyles.container}>
      <Typography style="Title1" color={palette.Another.Black}>
        {text}
      </Typography>
      <Profile />
    </View>
  );
};
export default TitleTopBar;
