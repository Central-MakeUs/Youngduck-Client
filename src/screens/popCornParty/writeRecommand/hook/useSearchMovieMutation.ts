import {getSearchMovieData} from '@/apis/popcornParty';
import {useMutation} from '@tanstack/react-query';

const useSearchMovieMutation = (movie: string) => {
  const {mutate: searchMovieMutate, data: searchMovieData} = useMutation({
    mutationFn: () => getSearchMovieData(movie),
    mutationKey: ['searchMovie', movie],
  });

  return {searchMovieData, searchMovieMutate};
};

export default useSearchMovieMutation;
