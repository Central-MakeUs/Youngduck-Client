import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AxiosError} from 'axios';

import {postImageUpload} from '@/apis/image/image';
import {postScreening} from '@/apis/screening/screening';
import useNavigator from '../useNavigator';
import stackScreens from '@/constants/stackScreens';
import {
  postScreeningComplainReview,
  postScreeningDetailReview,
} from '@/apis/screening/review';
import {postScreeningBookmark} from '@/apis/screening/detail';
import {ResponseErrorAPI} from '@/models/common/responseDTO';
import {showSnackBar} from '@/utils/showSnackBar';

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
      queryClient.invalidateQueries({queryKey: ['screeningDetail']});
    },
  });

  // 스크리닝 찜하기 post
  const uploadScreeningBookmark = useMutation({
    mutationFn: postScreeningBookmark,
    onSuccess: () => {
      //console.log('신고 성공');
      queryClient.invalidateQueries({queryKey: ['screeningDetail']});
    },
    onError: err => {
      const errorResponse = (err as AxiosError).response;
      if (errorResponse) {
        const error = errorResponse.data as ResponseErrorAPI;
        if (error.code === 'USER_SCREENING_401') {
          showSnackBar(error.reason);
        }
      }
    },
  });

  // 스크리닝 신고 post
  const complainScreeningReview = useMutation({
    mutationFn: postScreeningComplainReview,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['screeningReview']});
    },
    onError: err => {
      const errorResponse = (err as AxiosError).response;
      if (errorResponse) {
        const error = errorResponse.data as ResponseErrorAPI;
        console.log(error);
        showSnackBar(error.reason);
      }
    },
  });

  return {
    uploadImage,
    uploadScreening,
    uploadScreeningReview,
    uploadScreeningBookmark,
    complainScreeningReview,
  };
};
export default useScreeningMutation;
