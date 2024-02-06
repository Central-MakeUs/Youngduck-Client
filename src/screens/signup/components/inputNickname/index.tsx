import BoxButton from '@/components/buttons/boxButton';
import DuplicatedButton from '@/components/buttons/duplicatedButton';
import CustomTextInput from '@/components/inputs/customTextInput';
import SubTitleDescription from '@/components/title/subTitleDescription';
import useCheckNicknameDuplication from '@/hooks/useCheckNicknameDuplication';
import useHandleInputNickname from '@/hooks/useHandleInputNickname';
import {useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';
import inputNicknameStyles from './InputNickname.style';

interface IInputNickname {
  handleMoveScreen: () => void;
  nickname: string;
  setNickname: (value: string) => void;
}

const InputNickname = ({
  handleMoveScreen,
  nickname,
  setNickname,
}: IInputNickname) => {
  const [isDuplicated, setIsDuplicated] = useState<boolean>(true);
  const {isError, errorMessage, handleInputNickname} =
    useHandleInputNickname(setIsDuplicated);

  const {check} = useCheckNicknameDuplication(setIsDuplicated);

  const checkDuplicate = () => check(nickname);

  const handleInput = (e: string) => handleInputNickname(e, setNickname);

  return (
    <Pressable style={inputNicknameStyles.container} onPress={Keyboard.dismiss}>
      <View>
        <SubTitleDescription
          text="닉네임을 설정해주세요"
          subTitle={`닉네임은 자신의 활동명이 될거에요\n변경하고 싶다면 설정에 변경할 수 있어요`}
          mb={40}
        />
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
      <BoxButton disabled={isDuplicated || isError} onPress={handleMoveScreen}>
        다음
      </BoxButton>
    </Pressable>
  );
};

export default InputNickname;
