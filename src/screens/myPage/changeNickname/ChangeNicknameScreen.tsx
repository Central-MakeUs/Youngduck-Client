import BoxButton from '@/components/buttons/boxButton';
import DefaultContainer from '@/components/container/defaultContainer';
import Input from '@/components/input';
import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import {useUserStore} from '@/stores/user';
import {useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import changeNicknameScreenStyles from './ChangeNicknameScreen.style';
import TitleCenterTopBar from '@/components/topBar/titleCenterTopBar';

const ChangeNicknameScreen = () => {
  const {stackNavigation} = useNavigator();
  const {bottom} = useSafeAreaInsets();
  const {user, setUser} = useUserStore();
  const [isDuplicated, setIsDuplicated] = useState<boolean>(true);
  const [nickname, setNickname] = useState<string>(user.nickname);

  const handleChangeNickname = (e: string) => {
    setNickname(e);
    setIsDuplicated(true);
  };

  const onFinishChangeNickname = () => {
    setUser({...user, nickname: nickname});
    stackNavigation.goBack();
  };

  const style = changeNicknameScreenStyles({bottom});
  return (
    <>
      <TitleCenterTopBar title="닉네임 변경하기" />
      <DefaultContainer>
        <View style={style.inputWrap}>
          <View>
            <Typography style="Subtitle2" mt={24} mb={40}>
              수정할 닉네임
            </Typography>
            <Input
              value={nickname}
              placeholder="닉네임을 입력해주세요"
              onChangeInput={handleChangeNickname}
              title="닉네임"
              content="2~10자 입력 가능해요."
              maxLength={10}
              mode="check"
              isDuplicated={isDuplicated}
              setIsDuplicated={setIsDuplicated}
            />
          </View>
          <BoxButton onPress={onFinishChangeNickname} disabled={isDuplicated}>
            변경하기
          </BoxButton>
        </View>
      </DefaultContainer>
    </>
  );
};

export default ChangeNicknameScreen;
