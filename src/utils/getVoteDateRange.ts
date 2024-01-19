import {endOfWeek, format, startOfWeek} from 'date-fns';

const getVoteDateRange = () => {
  const startDate = format(startOfWeek(new Date()), 'M월 dd일');
  const endDate = format(endOfWeek(new Date()), 'M월 dd일');

  return {startDate, endDate};
};

export default getVoteDateRange;
