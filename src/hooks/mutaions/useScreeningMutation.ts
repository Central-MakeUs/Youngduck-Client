import {postImageUpload} from '@/apis/image/image';
import {postScreening} from '@/apis/screening/screening';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import useNavigator from '../useNavigator';
import stackScreens from '@/constants/stackScreens';
import {postScreeningDetailReview} from '@/apis/screening/review';
import {postScreeningBookmark} from '@/apis/screening/detail';

const useScreeningMutation = () => {
  const {stackNavigation} = useNavigator();
  const queryClient = useQueryClient();

  // 이미지 업로드 post
  const uploadImage = useMutation({
    mutationFn: postImageUpload,
  });

  // 스크리닝 상영회 업로드 post
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

  // 스크리닝 리뷰 업로드 post
  const uploadScreeningReview = useMutation({
    mutationFn: postScreeningDetailReview,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['screeningReview']});
    },
  });

  // 스크리닝 찜하기 post
  const uploadScreeningBookmark = useMutation({
    mutationFn: postScreeningBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['screeningDetail']});
    },
  });

  return {
    uploadImage,
    uploadScreening,
    uploadScreeningReview,
    uploadScreeningBookmark,
  };
};
export default useScreeningMutation;
