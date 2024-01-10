import {useCallback, useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import TextInput from '.';

const TextInputTest = () => {
  const [input, setInput] = useState<string>('');

  const onChangeInput = useCallback((text: string) => {
    setInput(text);
  }, []);

  return (
    <TextInput
      value={input}
      placeholder="입력해주세용"
      onChangeInput={onChangeInput}
      maxLength={5}
      title="닉네임"
      content="닉네임을 입력해주세요"
    />
  );
};

storiesOf('components/TextInput', module).add('with type', () => (
  <TextInputTest />
));
