import BoxButton from '@/components/buttons/boxButton';
import DefaultContainer from '@/components/container/defaultContainer';
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
import CustomTextInput from '@/components/inputs/customTextInput';
import DuplicatedButton from '@/components/buttons/duplicatedButton';
import useHandleInputNickname from '@/hooks/useHandleInputNickname';

const ChangeNicknameScreen = () => {
  const {user, setUser} = useUserStore();
  const [isDuplicated, setIsDuplicated] = useState<boolean>(true);
  const [nickname, setNickname] = useState<string>(user.nickname);
  const {updateNicknameMutate} = useUserMutation();
  const {check} = useCheckNicknameDuplication(setIsDuplicated);
  const {bottom} = useSafeAreaInsets();
  const {stackNavigation} = useNavigator();
  const style = changeNicknameScreenStyles({bottom});
  const {isError, errorMessage, handleInputNickname} =
    useHandleInputNickname(setIsDuplicated);

  const handleUpdateNickname = () => {
    setUser({...user, nickname});
    updateNicknameMutate(nickname);
    stackNavigation.goBack();
  };

  const checkDuplicate = () => check(nickname);

  const handleInput = (e: string) => handleInputNickname(e, setNickname);

  return (
    <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
      <TitleCenterTopBar title="닉네임 변경하기" />
      <DefaultContainer>
        <View style={style.inputWrap}>
          <View>
            <Typography style="Subtitle2" mt={24} mb={40}>
              변경할 닉네임을 입력해 주세요
            </Typography>
            <CustomTextInput
              title="닉네임"
              value={nickname}
              onChangeText={handleInput}
              placeholder="닉네임을 입력해주세요"
              isError={isError}
              errorMessage={errorMessage}>
              <DuplicatedButton
                value={nickname}
                isDuplicated={isDuplicated}
                onPress={checkDuplicate!}
              />
            </CustomTextInput>
          </View>
          <BoxButton
            onPress={handleUpdateNickname}
            disabled={isDuplicated || isError}>
            변경하기
          </BoxButton>
        </View>
      </DefaultContainer>
    </Pressable>
  );
};

export default ChangeNicknameScreen;
