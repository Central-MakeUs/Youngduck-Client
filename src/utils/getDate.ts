import {format, getHours, getMinutes} from 'date-fns';
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

export {getDateRange, getTime};
