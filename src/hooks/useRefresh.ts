import {useCallback, useMemo, useState} from 'react';
import {QueryKey} from '@tanstack/react-query';

import useInvalidateQueries from './useInvalidateQueries';
import wait from '@/utils/wait';

const useRefreshing = () => {
  const invalidateQueries = useInvalidateQueries();
  const [isRefresh, setIsRefresh] = useState(false);

  const onRefresh = useCallback(
    async (queryKeys: QueryKey[] | QueryKey) => {
      if (!queryKeys) {
        return;
      }
      setIsRefresh(true);
      try {
        await wait(200);
        if (queryKeys.length > 1) {
          invalidateQueries.multiple(queryKeys as QueryKey[]);
        } else {
          invalidateQueries.single(queryKeys);
        }
      } catch (err) {
        console.log('err', err);
      } finally {
        setIsRefresh(false);
      }
    },
    [invalidateQueries],
  );

  return useMemo(() => ({onRefresh, isRefresh}), [onRefresh, isRefresh]);
};

export default useRefreshing;
