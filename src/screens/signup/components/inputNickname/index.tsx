import BoxButton from '@/components/buttons/boxButton';
import CheckDuplicate from '@/components/checkNickname/CheckNickname';
import SubTitleDescription from '@/components/title/subTitleDescription';
import {useState} from 'react';
import {View} from 'react-native';

interface IInputNickname {
  handleMoveScreen: () => void;
}

const InputNickname = ({handleMoveScreen}: IInputNickname) => {
  const [nickname, setNickname] = useState<string>('');
  const [isDuplicated, setIsDuplicated] = useState<boolean>(true);
  return (
    <>
      <View>
        <SubTitleDescription
          text="닉네임을 설정해주세요"
          subTitle={`닉네임은 자신의 활동명이 될거에요\n변경하고 싶다면 설정에 변경할 수 있어요`}
          mb={40}
        />
        <CheckDuplicate
          value={nickname}
          placeholder="닉네임을 입력해주세요"
          onChangeInput={e => setNickname(e)}
          title="닉네임"
          content="2~10자 입력 가능해요."
          maxLength={10}
          isDuplicated={isDuplicated}
          setIsDuplicated={setIsDuplicated}
        />
      </View>
      <BoxButton
        disabled={nickname.length < 2 || isDuplicated}
        onPress={handleMoveScreen}>
        다음
      </BoxButton>
    </>
  );
};

export default InputNickname;
