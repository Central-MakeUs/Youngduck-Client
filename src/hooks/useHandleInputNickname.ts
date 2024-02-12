import {useEffect, useState} from 'react';

const useHandleInputNickname = (
  setIsDuplicated: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const [error, setError] = useState<'none' | 'length' | 'regex'>('none');
  const isError = error !== 'none';
  const errorMessage =
    error === 'length'
      ? '2~10자 입력해 주세요'
      : '점(.), 언더바(_) 외의 특수문자 및 공백은 사용할 수 없어요';
  const nicknameRegex = /^[a-zA-Z0-9가-힣._]*$/;

  const handleInputNickname = (e: string, setNickname: (e: string) => void) => {
    if (e.length > 10) return setError('length');
    if (e.length < 2) setError('length');
    if (!nicknameRegex.test(e)) setError('regex');
    if (e.length <= 10 && e.length >= 2 && nicknameRegex.test(e))
      setError('none');
    setNickname(e);
    !isError && setIsDuplicated(true);
  };
  useEffect(() => {
    if (isError) setIsDuplicated(false);
    else setIsDuplicated(true);
  }, [error]);

  return {isError, errorMessage, handleInputNickname};
};

export default useHandleInputNickname;
