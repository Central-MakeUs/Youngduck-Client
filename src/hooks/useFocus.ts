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
   * Blur 처리 합니다.
   */
  const onBlur = (text: string) => {
    setType(text ? 'writed' : 'default');
  };

  /**
   * Focus out 처리합니다.
   */

  const onFocusout = (value: string, maxLength?: number) => {
    onBlur(value);
    if (maxLength && value.length > maxLength) {
      onError();
    }
  };

  return {type, onFocus, onBlur, onError, onFocusout};
};

export default useFocus;
