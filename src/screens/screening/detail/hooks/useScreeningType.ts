import {useState} from 'react';
import {DateParsable} from 'react-native-calendar-picker';

import {DetailBottomButtonType} from '@/types/ui';
import {getDatePrevious, getOneDayAfter} from '@/utils/getDate';

const useScreeningType = () => {
  const [buttonType, setButtonType] =
    useState<DetailBottomButtonType>('default');

  const setDetailButtonType = (
    reviewed: boolean,
    bookmarked: boolean,
    endDate: DateParsable,
  ) => {
    if (reviewed) {
      // 리뷰 완료 상태 반환
      setButtonType('reviewComplete');
    } else {
      if (bookmarked) {
        // 신청 완료 후 오늘이 상영회 종료일 하루 뒤면 리뷰 시작 상태 반환
        if (getOneDayAfter(endDate)) {
          setButtonType('reviewStart');
          // 상영신청 완료 상태 반환
        } else {
          setButtonType('complete');
        }
      } else {
        // 신청 안했는데 기간이 오늘 지나지 않았경우 신청 상태 반환
        if (getDatePrevious(endDate)) {
          setButtonType('default');
          // 기간 지난 경우 상영 종료 상태 반환
        } else {
          setButtonType('finish');
        }
      }
    }
  };

  const buttonOnPress = () => {
    console.log(buttonType);
  };

  return {buttonType, setDetailButtonType, buttonOnPress};
};
export default useScreeningType;
