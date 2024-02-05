import {QueryKey, useQueryClient} from '@tanstack/react-query';

const useInvalidateQueries = () => {
  const queryClient = useQueryClient();

  const invalidateSingleQuery = (queryKey: QueryKey) => {
    queryClient.invalidateQueries({queryKey: queryKey});
  };

  const invalidateMultipleQueries = (queryKeys: QueryKey[]) => {
    queryKeys.forEach(queryKey => {
      queryClient.invalidateQueries({queryKey: [queryKey]});
    });
  };

  return {
    single: invalidateSingleQuery,
    multiple: invalidateMultipleQueries,
  };
};

export default useInvalidateQueries;
