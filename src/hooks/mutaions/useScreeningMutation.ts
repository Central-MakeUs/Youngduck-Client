import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AxiosError} from 'axios';

import {postImageUpload} from '@/apis/image/image';
import {patchScreening, postScreening} from '@/apis/screening/screening';
import useNavigator from '../useNavigator';
import stackScreens from '@/constants/stackScreens';

import {
  postScreeningBookmark,
  postScreeningMyPrivate,
} from '@/apis/screening/detail';

import {
  postScreeningComplainReview,
  postScreeningDetailReview,
} from '@/apis/screening/review';
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
      queryClient.invalidateQueries({queryKey: ['weekScreening']});
      queryClient.invalidateQueries({queryKey: ['recentScreening']});
      queryClient.invalidateQueries({queryKey: ['mostCommentScreening']});
      queryClient.invalidateQueries({queryKey: ['screeningFilter']});
    },
  });

  // 스크리닝 수정 patch
  const modifyScreening = useMutation({
    mutationFn: patchScreening,
    onSuccess: () => {
      showSnackBar('스크리닝 수정이 되었습니다');
      stackNavigation.navigate(stackScreens.BottomTabScreens);
      queryClient.invalidateQueries({queryKey: ['screeningDetail']});
      queryClient.invalidateQueries({queryKey: ['screeningFilter']});
    },
  });

  // 스크리닝 리뷰 업로드 post
  const uploadScreeningReview = useMutation({
    mutationFn: postScreeningDetailReview,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['screeningReview']});
      queryClient.invalidateQueries({queryKey: ['screeningDetail']});
      queryClient.invalidateQueries({queryKey: ['mostCommentScreening']});
    },
  });

  // 스크리닝 찜하기 post
  const uploadScreeningBookmark = useMutation({
    mutationFn: postScreeningBookmark,
    onSuccess: () => {
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

  // 스크리닝 비공개/공개하기 post
  const uploadScreeningPrivate = useMutation({
    mutationFn: postScreeningMyPrivate,
    onSuccess: () => {
      showSnackBar('공개 및 비공개 처리가 되었습니다');
      queryClient.invalidateQueries({queryKey: ['screeningMyDetail']});
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
    uploadScreeningPrivate,
    modifyScreening,
    complainScreeningReview,
  };
};
export default useScreeningMutation;
