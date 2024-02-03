import BoxButton from '@/components/buttons/boxButton';
import Input from '@/components/input';
import SubTitleDescription from '@/components/title/subTitleDescription';
import useUserMutation from '@/hooks/mutaions/useUserMutation';
import {showSnackBar} from '@/utils/showSnackBar';
import {useEffect, useState} from 'react';
import {View} from 'react-native';

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
  const {checkNicknameDuplication} = useUserMutation();

  const handleInputNickname = (e: string) => setNickname(e);

  const checkDuplicate = () => checkNicknameDuplication.mutate(nickname);

  useEffect(() => {
    if (checkNicknameDuplication?.data?.data?.duplicate === undefined) return;
    if (checkNicknameDuplication?.data?.data.duplicate) {
      showSnackBar('중복된 닉네임이에요');
      return;
    }
    setIsDuplicated(false);
  }, [checkNicknameDuplication?.data?.data]);
  return (
    <>
      <View>
        <SubTitleDescription
          text="닉네임을 설정해주세요"
          subTitle={`닉네임은 자신의 활동명이 될거에요\n변경하고 싶다면 설정에 변경할 수 있어요`}
          mb={40}
        />
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
      <BoxButton
        disabled={nickname.length < 2 || isDuplicated}
        onPress={handleMoveScreen}>
        다음
      </BoxButton>
    </>
  );
};

export default InputNickname;
