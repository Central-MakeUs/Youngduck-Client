import {postRecommendMovie, postVoteMovie} from '@/apis/popcornParty';
import {postComplainUser} from '@/apis/popcornParty/detail/detail';
import {postMovieReview} from '@/apis/popcornParty/writeReview/writeReview';
import {ResponseErrorAPI} from '@/models/common/responseDTO';
import {showSnackBar} from '@/utils/showSnackBar';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import useNavigator from '../useNavigator';

const usePopcornPartyMutation = () => {
  const queryClient = useQueryClient();
  const {stackNavigation} = useNavigator();
  // 팝콘파티 유저 신고 mutation
  const {mutate: complainUserMutate} = useMutation({
    mutationFn: postComplainUser,
    onSuccess: () => console.log('신고 성공'),
    onError: err => {
      const errorResponse = (err as AxiosError).response;
      if (errorResponse) {
        const error = errorResponse.data as ResponseErrorAPI;
        console.log(error);
        showSnackBar(error.reason);
      }
    },
  });

  // 팝콘작 리뷰 등록하기 mutation
  const {mutate: movieReviewMutate} = useMutation({
    mutationFn: postMovieReview,
    onSuccess: res => {
      console.log(res);
      stackNavigation.goBack();
      queryClient.invalidateQueries({queryKey: ['popcornReviewData']});
    },
    onError: err => {
      const errResponse = (err as AxiosError).response;
      const errData = errResponse?.data as ResponseErrorAPI;
      if (errData.code === 'POPCORN_REVIEW_409') {
        showSnackBar('중복된 리뷰가 존재해요');
        stackNavigation.goBack();
      }
    },
  });

  // 다음주 팝콘작 추천하기 mutation
  const {mutate: voteMovieMutate} = useMutation({
    mutationFn: postVoteMovie,
    onSuccess: () => {
      console.log('추천하기 성공');
      queryClient.invalidateQueries({queryKey: ['popcornOfNextWeek']});
    },
    onError: err => console.log(err),
  });

  // 팝콘작 추천하기 mutation
  const {mutate: recommendMovieMutate} = useMutation({
    mutationFn: postRecommendMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['randomPopcornRecommendData']});
      stackNavigation.goBack();
    },
    onError: err => {
      const errResponse = (err as AxiosError).response;
      const errData = errResponse?.data as ResponseErrorAPI;
      if (errData.code === 'MOVIE_409') {
        stackNavigation.goBack();
        showSnackBar('중복된 영화가 존재해요');
      }
    },
  });

  return {
    complainUserMutate,
    movieReviewMutate,
    voteMovieMutate,
    recommendMovieMutate,
  };
};

export default usePopcornPartyMutation;
