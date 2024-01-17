import {TextInputType} from '@/types/ui';
import {useState} from 'react';

/**
 * focus에 따른 색상 여부 전달
 */
const useFocus = () => {
  const [type, setType] = useState<TextInputType>('default');
  /**
   * Focus 처리합니다.
   */
  const onFocus = () => {
    setType('active');
  };

  /**
   * maxLength input 에러 처리합니다.
   */
  const onError = () => {
    setType('caution');
  };

  /**
   * 닉네임 중복 시 에러 처리합니다.
   */
  const onWarning = () => {
    setType('warning');
  };

  /**
   * Blur 처리 합니다.
   */
  const onBlur = (text: string) => {
    setType(text ? 'writed' : 'default');
  };

  return {type, onFocus, onBlur, onError, onWarning};
};

export default useFocus;
