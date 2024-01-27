import {postImageUpload} from '@/apis/image/image';
import {postScreening} from '@/apis/screening/screening';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import useNavigator from '../useNavigator';
import stackScreens from '@/constants/stackScreens';

const useScreeningMutation = () => {
  const {stackNavigation} = useNavigator();
  const queryClient = useQueryClient();

  const uploadImage = useMutation({
    mutationFn: postImageUpload,
  });

  const uploadScreening = useMutation({
    mutationFn: postScreening,
    onSuccess: () => {
      stackNavigation.navigate(stackScreens.ScreeningListScreen);

      queryClient.invalidateQueries({queryKey: ['weekScreening']});
      queryClient.invalidateQueries({queryKey: ['recentScreening']});
      queryClient.invalidateQueries({queryKey: ['mostCommentScreening']});
      queryClient.invalidateQueries({queryKey: ['screeningFilter']});
    },
  });

  return {uploadImage, uploadScreening};
};
export default useScreeningMutation;
