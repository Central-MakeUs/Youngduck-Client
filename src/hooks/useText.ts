import {useState} from 'react';

const useText = (checkValid: (value: string) => boolean) => {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(false);

  const updateText = (value: string) => {
    setText(value);
    setIsValid(checkValid(value));
    console.log(value);
    console.log(checkValid);
  };

  return {text, isValid, updateText};
};

export default useText;
