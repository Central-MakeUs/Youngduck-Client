import {useState} from 'react';

const useText = (checkValid: (text: string) => boolean) => {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(false);

  const updateText = (text: string) => {
    setText(text);
    setIsValid(checkValid(text));
  };

  return {text, isValid, updateText};
};

export default useText;
