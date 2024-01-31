import {getMonth, getWeekOfMonth} from 'date-fns';

export const getWeekOfMonthString = () => {
  const month = getMonth(new Date());
  const weekOfMonth = getWeekOfMonth(new Date());
  switch (weekOfMonth) {
    case 1:
      return `${month}월 첫째 주 팝콘작`;
    case 2:
      return `${month}월 둘째 주 팝콘작`;
    case 3:
      return `${month}월 셋째 주 팝콘작`;
    case 4:
      return `${month}월 넷째 주 팝콘작`;
    case 5:
      return `${month}월 다섯째 주 팝콘작`;
  }
};
