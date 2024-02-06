import BoxButton from '@/components/buttons/boxButton';
import DefaultContainer from '@/components/container/defaultContainer';
import Input from '@/components/input';
import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import {useUserStore} from '@/stores/user';
import {useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import changeNicknameScreenStyles from './ChangeNicknameScreen.style';
import TitleCenterTopBar from '@/components/topBar/titleCenterTopBar';
import useUserMutation from '@/hooks/mutaions/useUserMutation';
import useCheckNicknameDuplication from '@/hooks/useCheckNicknameDuplication';

const ChangeNicknameScreen = () => {
  const {stackNavigation} = useNavigator();
  const {bottom} = useSafeAreaInsets();
  const {user, setUser} = useUserStore();
  const [isDuplicated, setIsDuplicated] = useState<boolean>(true);
  const [nickname, setNickname] = useState<string>(user.nickname);
  const {updateNicknameMutate} = useUserMutation();
  const style = changeNicknameScreenStyles({bottom});
  const {check} = useCheckNicknameDuplication(setIsDuplicated);

  const handleInputNickname = (e: string) => {
    setNickname(e);
    setIsDuplicated(true);
  };

  const handleUpdateNickname = () => {
    setUser({...user, nickname});
    updateNicknameMutate(nickname);
    stackNavigation.goBack();
  };

  const checkDuplicate = () => check(nickname);

  return (
    <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
      <TitleCenterTopBar title="닉네임 변경하기" />
      <DefaultContainer>
        <View style={style.inputWrap}>
          <View>
            <Typography style="Subtitle2" mt={24} mb={40}>
              변경할 닉네임을 입력해 주세요
            </Typography>
            <Input
              value={nickname}
              placeholder="닉네임을 입력해주세요"
              onChangeInput={handleInputNickname}
              title="닉네임"
              content="2~10자 입력 가능해요."
              maxLength={10}
              mode="check"
              isDuplicated={isDuplicated}
              checkDuplicate={checkDuplicate}
            />
          </View>
          <BoxButton onPress={handleUpdateNickname} disabled={isDuplicated}>
            변경하기
          </BoxButton>
        </View>
      </DefaultContainer>
    </Pressable>
  );
};

export default ChangeNicknameScreen;
