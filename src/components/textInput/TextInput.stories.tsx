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
      title="텍스트 박스"
      content="텍스트 박스"
    />
  );
};

storiesOf('components/TextInpu', module).add('with type', () => (
  <TextInputTest />
));
