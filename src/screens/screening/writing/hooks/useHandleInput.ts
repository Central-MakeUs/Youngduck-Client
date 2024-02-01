import {useState} from 'react';
import {DateParsable} from 'react-native-calendar-picker';

import {IScreeningBodyRequest} from '@/models/screening/request/screeningRequestDto';
import {IScreeningMyDetailResponse} from '@/models/screening/response/detailResponseDto';
import {getCategory} from '@/utils/getCategory';

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

  const onChangeInput = (
    inputName: string,
    value: string | DateParsable | undefined | boolean | Date,
  ) => {
    setInputValues({...inputValues, [inputName]: value});
  };

  return {setModify, inputValues, setInputValues, onChangeInput};
};
export default useHandleInput;
