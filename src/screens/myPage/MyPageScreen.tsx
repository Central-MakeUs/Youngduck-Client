import SvgIcons from '@/assets/svgIcons';
import DefaultContainer from '@/components/container/defaultContainer';
import GradientContainer from '@/components/container/gradientContainer';
import Typography from '@/components/typography';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

const MyPageScreen = () => {
  const [nickname, setNickname] = useState<string>('LANY');
  const {stackNavigation} = useNavigator();
  return (
    <GradientContainer
      colors={[
        'hsl(54.857142857142875, 100%, 93.13725490196079%)',
        'rgb(255,255,255)',
      ]}
      end={{x: 0, y: 0.8}}>
      <DefaultContainer>
        <Typography style="Title1">마이페이지</Typography>
        <Pressable
          onPress={() =>
            stackNavigation.navigate(stackScreens.ChangeNicknameScreen, {
              nickname,
            })
          }
          style={{
            alignItems: 'center',
            marginTop: 24,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
              paddingVertical: 4,
              paddingHorizontal: 12,
              backgroundColor: palette.Primary.Alternative,
              borderRadius: 8,
            }}>
            <Typography style="Label1" color={palette.Primary.Dark}>
              {nickname}
            </Typography>
            <SvgIcons.ModifyIcon />
          </View>
        </Pressable>
      </DefaultContainer>
    </GradientContainer>
  );
};
export default MyPageScreen;
