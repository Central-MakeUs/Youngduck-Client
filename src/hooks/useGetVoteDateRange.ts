import {endOfWeek, format, startOfWeek} from 'date-fns';
import {useEffect, useState} from 'react';

const useGetVoteDateRange = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  useEffect(() => {
    setStartDate(format(startOfWeek(new Date()), 'M월 dd일'));
    setEndDate(format(endOfWeek(new Date()), 'M월 dd일'));
  }, []);

  return {startDate, endDate};
};

export default useGetVoteDateRange;
