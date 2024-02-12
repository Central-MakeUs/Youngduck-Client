import {useCallback, useState} from 'react';
import {DateParsable} from 'react-native-calendar-picker';

import {IScreeningBodyRequest} from '@/models/screening/request/screeningRequestDto';
import {IScreeningMyDetailResponse} from '@/models/screening/response/detailResponseDto';
import {getCategory} from '@/utils/getCategory';
import {checkEmail, checkURL, notContainsWhiteSpace} from '@/utils/checkValue';

const useHandleInput = () => {
  const [inputValues, setInputValues] = useState<IScreeningBodyRequest>({
    posterImgUrl: '',
    screeningTitle: '',
    hostName: '',
    category: '',
    screeningStartDate: undefined,
    screeningEndDate: undefined,
    screeningStartTime: undefined,
    location: '',
    information: '',
    formUrl: '',
    hostPhoneNumber: '',
    hostEmail: '',
    hasAgreed: false,
  });

  const [inputIsValid, setInputIsValid] = useState({
    formUrlValid: '',
    emailIsValid: '',
    dateIsValid: '',
  });

  const setModify = (data: IScreeningMyDetailResponse) => {
    if (data) {
      setInputValues({
        ...inputValues,
        posterImgUrl: data.posterImgUrl,
        screeningTitle: data.screeningTitle,
        hostName: data.hostName,
        category: getCategory(data.category),
        screeningStartDate: new Date(data.screeningStartDate),
        screeningEndDate: new Date(data.screeningEndDate),
        screeningStartTime: new Date(data.screeningStartTime),
        information: data.information,
        formUrl: data.formUrl,
        hostPhoneNumber: data.hostPhoneNumber ? data.hostPhoneNumber : '',
        hostEmail: data.hostEmail,
        hasAgreed: data.hasAgreed,
        location: data.location,
      });
    }
  };

  const errorMessages = {
    nicknameMinLength: (minLength: number) =>
      `닉네임은 ${minLength}-6글자여야 합니다.`,
    emailFormat: '이메일 형식에 맞춰주세요',
    urlFormat: 'url 형식에 맞춰 입력해주세요(ex. https://forms.)',
    spaceUrlFormat: 'url 입력란에 공백 제거해주세요',
    spaceEmailFormat: '이메일 입력란에 공백 제거해주세요',
    dateFormat: '상영회 시작일이 오늘보다 이전이에요',
  };

  const onChangeInput = useCallback(
    (
      inputName: string,
      value: string | DateParsable | undefined | boolean | Date,
    ) => {
      setInputValues({...inputValues, [inputName]: value});

      if (inputName === 'hostEmail') {
        if (!notContainsWhiteSpace(value as string)) {
          setInputIsValid(prev => ({
            ...prev,
            emailIsValid: errorMessages.spaceEmailFormat,
          }));
        } else if (!checkEmail(value as string)) {
          setInputIsValid(prev => ({
            ...prev,
            emailIsValid: errorMessages.emailFormat,
          }));
        } else {
          setInputIsValid(prev => ({
            ...prev,
            emailIsValid: '',
          }));
        }
      }

      if (inputName === 'formUrl') {
        if (!notContainsWhiteSpace(value as string)) {
          setInputIsValid(prev => ({
            ...prev,
            formUrlValid: errorMessages.spaceUrlFormat,
          }));
        } else if (!checkURL(value as string)) {
          setInputIsValid(prev => ({
            ...prev,
            formUrlValid: errorMessages.urlFormat,
          }));
        } else {
          setInputIsValid(prev => ({
            ...prev,
            formUrlValid: '',
          }));
        }
      }
    },
    [inputValues],
  );
  return {setModify, inputValues, onChangeInput, inputIsValid};
};
export default useHandleInput;
