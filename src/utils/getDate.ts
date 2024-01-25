import {endOfWeek, format, getHours, getMinutes, startOfWeek} from 'date-fns';
import {DateParsable} from 'react-native-calendar-picker';

const getDateRange = (startDate: DateParsable, endDate: DateParsable) => {
  const dateRange = `${format(startDate, 'yyyy-MM-dd')} ~ ${format(
    endDate,
    'yyyy-MM-dd',
  )}`;

  return dateRange;
};

const getTime = (date: Date) => {
  if (date) {
    const time = `${getHours(date)} : ${getMinutes(date)}`;
    return time;
  }
  return '';
};

const getVoteDateRange = () => {
  const startDate = format(startOfWeek(new Date()), 'M월 dd일');
  const endDate = format(endOfWeek(new Date()), 'M월 dd일');

  return {startDate, endDate};
};

const getDate = (date: DateParsable) => {
  const dateRange = `${format(date, 'yyyy.MM.dd')}`;

  return dateRange;
};

export {getDateRange, getTime, getVoteDateRange, getDate};
