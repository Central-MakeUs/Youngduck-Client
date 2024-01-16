import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {titleStyles} from './TitleTopBar.style';
import Profile from '@/components/profile';
import TopBarContainer from '@/components/container/topBarContainer';

interface TitleTopBarProps extends CommonMarginVerticalProps {
  text: string;
}
const TitleTopBar = ({text, mb, mt}: TitleTopBarProps) => {
  return (
    <TopBarContainer>
      <View
        style={{
          ...titleStyles.container,
          marginTop: mt ? mt : undefined,
          marginBottom: mb ? mb : undefined,
        }}>
        <Typography style="Title1" color={palette.Another.Black}>
          {text}
        </Typography>
        <Profile />
      </View>
    </TopBarContainer>
  );
};
export default TitleTopBar;
