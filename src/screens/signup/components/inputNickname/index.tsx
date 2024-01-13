import BoxButton from '@/components/buttons/boxButton';
import TextInput from '@/components/textInput';
import SubTitleDescription from '@/components/title/subTitleDescription';
import {useState} from 'react';
import {View} from 'react-native';

interface IInputNickname {
  handleMoveScreen: () => void;
}

const InputNickname = ({handleMoveScreen}: IInputNickname) => {
  const [nickname, setNickname] = useState<string>('');
  return (
    <>
      <View>
        <SubTitleDescription
          text="닉네임을 설정해주세요"
          subTitle={`닉네임은 자신의 활동명이 될거에요\n변경하고 싶다면 설정에 변경할 수 있어요`}
          mb={40}
        />
        <TextInput
          value={nickname}
          placeholder="닉네임을 입력해주세요"
          onChangeInput={e => setNickname(e)}
          title="닉네임"
          content="닉네임을 입력해주세요"
          maxLength={10}
        />
      </View>
      <BoxButton onPress={handleMoveScreen}>다음</BoxButton>
    </>
  );
};

export default InputNickname;
