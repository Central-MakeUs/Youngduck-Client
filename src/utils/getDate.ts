import {DateParsable} from 'react-native-calendar-picker';
import {
  endOfWeek,
  format,
  getHours,
  getMinutes,
  isAfter,
  isBefore,
  startOfWeek,
  isSameDay,
  getMonth,
  getWeekOfMonth,
  addWeeks,
} from 'date-fns';

const today = new Date();

const getDateRange = (startDate: DateParsable, endDate: DateParsable) => {
  const dateRange = `${format(startDate, 'yyyy.MM.dd')} - ${format(
    endDate,
    'yyyy.MM.dd',
  )}`;

  return dateRange;
};

const getKorDateRange = (startDate: DateParsable, endDate: DateParsable) => {
  if (startDate && endDate) {
    const dateRange = `${format(startDate, 'yyyy년 MM월 dd일')} - ${format(
      endDate,
      'yyyy년 MM월 dd일',
    )}`;
    return dateRange;
  }
  return '';
};

const getTime = (date: Date) => {
  if (date) {
    const time = `${getHours(date)} : ${getMinutes(date)}`;
    return time;
  }
  return '';
};

const getVoteDateRange = () => {
  const startDate = format(addWeeks(startOfWeek(new Date()), 1), 'M월 dd일');
  const endDate = format(addWeeks(endOfWeek(new Date()), 1), 'M월 dd일');

  return {startDate, endDate};
};

const getSimpleDate = (date: DateParsable) => {
  if (date) {
    const dateRange = `${format(date, 'yyyy.MM.dd')}`;
    return dateRange;
  }
  return '';
};

// 오늘 날짜가 시작일 이전에 있는 지
const getDatePrevious = (startDate: DateParsable) => {
  return isBefore(today, startDate) || isSameDay(today, startDate);
};

// 오늘 날짜가 시작일 포함 이후에 있는 지
const getDateAfter = (startDate: DateParsable) => {
  return isAfter(today, startDate) || isSameDay(today, startDate);
};

const getWeekOfMonthString = (date: string | null) => {
  const month = getMonth(date === null ? new Date() : new Date(date));
  const weekOfMonth = getWeekOfMonth(
    date === null ? new Date() : new Date(date),
  );
  switch (weekOfMonth) {
    case 1:
      return `${month + 1}월 첫째 주 팝콘작`;
    case 2:
      return `${month + 1}월 둘째 주 팝콘작`;
    case 3:
      return `${month + 1}월 셋째 주 팝콘작`;
    case 4:
      return `${month + 1}월 넷째 주 팝콘작`;
    case 5:
      return `${month + 1}월 다섯째 주 팝콘작`;
  }
};

export {
  getDateRange,
  getTime,
  getVoteDateRange,
  getSimpleDate,
  getKorDateRange,
  getDatePrevious,
  getDateAfter,
  getWeekOfMonthString,
};
