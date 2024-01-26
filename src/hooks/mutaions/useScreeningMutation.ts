import {postImageUpload} from '@/apis/image/image';
import {postScreening} from '@/apis/screening/screening';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import useNavigator from '../useNavigator';

const useScreeningMutation = () => {
  const {stackNavigation} = useNavigator();
  const queryClient = useQueryClient();

  const uploadImage = useMutation({
    mutationFn: postImageUpload,
  });

  const uploadScreening = useMutation({
    mutationFn: postScreening,
    onSuccess: data => {
      stackNavigation.navigate('DetailScreen', {id: data.data.id});

      queryClient.invalidateQueries({queryKey: ['weekScreening']});
      queryClient.invalidateQueries({queryKey: ['recentScreening']});
      queryClient.invalidateQueries({queryKey: ['mostCommentScreening']});
    },
  });

  return {uploadImage, uploadScreening};
};
export default useScreeningMutation;
