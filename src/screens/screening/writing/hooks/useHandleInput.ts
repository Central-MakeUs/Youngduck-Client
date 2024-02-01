import {getScreeningMyDetailContent} from '@/apis/screening/detail';
import {IScreeningBodyRequest} from '@/models/screening/request/screeningRequestDto';
import {getCategory} from '@/utils/getCategory';
import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {DateParsable} from 'react-native-calendar-picker';

const useHandleInput = (search: string, id?: number) => {
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

  const setModify = () => {
    const {data} = useQuery({
      queryKey: ['screeningMyDetail'],
      queryFn: () => {
        if (id) {
          return getScreeningMyDetailContent(id);
        }
      },
    });

    if (data) {
      setInputValues({
        ...inputValues,
        posterImgUrl: data.data.posterImgUrl,
        screeningTitle: data.data.screeningTitle,
        hostName: data.data.hostName,
        category: getCategory(data.data.category),
        screeningStartDate: new Date(data.data.screeningStartDate),
        screeningEndDate: new Date(data.data.screeningEndDate),
        screeningStartTime: new Date(data.data.screeningStartTime),
        information: data.data.information,
        formUrl: data.data.formUrl,
        hostPhoneNumber: data.data.hostPhoneNumber,
        hostEmail: data.data.hostEmail,
        hasAgreed: data.data.hasAgreed,
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
