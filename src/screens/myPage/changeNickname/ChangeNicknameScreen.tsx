import SvgIcons from '@/assets/svgIcons';
import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import InputNickname from '@/screens/signup/components/inputNickname';
import palette from '@/styles/theme/color';
import {useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IChangeNicknameScreenProp {
  route: {
    params: {
      nickname: string;
      setNickname: React.Dispatch<React.SetStateAction<string>>;
    };
  };
}

const ChangeNicknameScreen = ({route}: IChangeNicknameScreenProp) => {
  const {stackNavigation} = useNavigator();
  const {top, bottom} = useSafeAreaInsets();
  const {nickname, setNickname} = route.params;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          padding: 16,
          paddingTop: 16 + top,
          alignItems: 'center',
        }}>
        <SvgIcons.BackArrowIcon onPress={stackNavigation.goBack} />
        <View style={{flex: 1, alignItems: 'center', paddingRight: 24}}>
          <Typography style="Label1" color={palette.Another.Black}>
            닉네임 변경하기
          </Typography>
        </View>
      </View>
      <DefaultContainer>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingBottom: bottom + 16,
          }}>
          <Typography style="Subtitle2">수정할 닉네임</Typography>
        </View>
      </DefaultContainer>
    </>
  );
};

export default ChangeNicknameScreen;
