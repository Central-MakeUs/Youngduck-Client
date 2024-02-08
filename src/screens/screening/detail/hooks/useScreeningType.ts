import {useState} from 'react';
import {DateParsable} from 'react-native-calendar-picker';

import {DetailBottomButtonType} from '@/types/ui';
import {getDateAfter, getDatePrevious} from '@/utils/getDate';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {useWebviewStore} from '@/stores/webview';

const useScreeningType = (id: number) => {
  const {stackNavigation} = useNavigator();
  const [buttonType, setButtonType] =
    useState<DetailBottomButtonType>('default');
  // 관람 취소 팝업
  const [popupCancel, setPopupCancel] = useState<boolean>(false);
  // 관람 신청 팝업
  const [popupScreening, setPopupScreening] = useState<boolean>(false);
  const {setWebview, webview} = useWebviewStore();

  const setDetailButtonType = (
    reviewed: boolean,
    bookmarked: boolean,
    endDate: DateParsable,
    startDate: DateParsable,
  ) => {
    if (reviewed) {
      // 리뷰 완료 상태 반환
      setButtonType('reviewComplete');
    } else {
      if (bookmarked) {
        // 신청 완료 후 오늘이 상영회 시작일 이후 이면 리뷰 시작 상태 반환
        if (getDateAfter(startDate)) {
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

  const handleButtonOnPress = () => {
    if (buttonType === 'reviewStart') {
      // 리뷰 작성하기로 이동
      stackNavigation.navigate(stackScreens.ReviewWritingScreen, {id});
    }
    if (buttonType === 'default') {
      // 관람 신청 웹뷰 열기
      stackNavigation.navigate(stackScreens.DetailWebviewScreen);
    }
  };

  const handleOptionOnPress = () => {
    if (buttonType === 'complete') {
      // 관람 취소 모달 열기
      setPopupCancel(true);
    }
  };

  // 관람 취소 모달 닫기
  const onClosePopupCancel = () => {
    setPopupCancel(false);
  };

  // 관람 신청 모달 닫기
  const onClosePopupScreening = () => {
    setWebview({...webview, isVisited: false});
    setPopupScreening(false);
  };

  return {
    buttonType,
    setDetailButtonType,
    handleButtonOnPress,
    handleOptionOnPress,
    popupCancel,
    onClosePopupCancel,
    popupScreening,
    onClosePopupScreening,
    setPopupScreening,
  };
};
export default useScreeningType;
