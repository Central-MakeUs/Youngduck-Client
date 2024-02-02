import {postRecommendMovie, postVoteMovie} from '@/apis/popcornParty';
import {postComplainUser} from '@/apis/popcornParty/detail/detail';
import {postMovieReview} from '@/apis/popcornParty/writeReview/writeReview';
import {useMutation} from '@tanstack/react-query';

const usePopcornPartyMutation = () => {
  // 팝콘파티 유저 신고 mutation
  const {mutate: complainUserMutate} = useMutation({
    mutationFn: postComplainUser,
    onSuccess: () => console.log('신고 성공'),
    onError: err => console.log(err),
  });

  // 팝콘작 등록하기 mutation
  const {mutate: movieReviewMutate} = useMutation({
    mutationFn: postMovieReview,
    onSuccess: res => console.log(res),
    onError: err => console.log(err),
  });

  // 다음주 팝콘작 추천하기 mutation
  const {mutate: voteMovieMutate} = useMutation({
    mutationFn: postVoteMovie,
    onSuccess: () => console.log('추천하기 성공'),
    onError: err => console.log(err),
  });

  // 팝콘작 추천하기 mutation
  const {mutate: recommendMovieMutate} = useMutation({
    mutationFn: postRecommendMovie,
    onSuccess: res => console.log(res),
    onError: err => console.log(err),
  });

  return {
    complainUserMutate,
    movieReviewMutate,
    voteMovieMutate,
    recommendMovieMutate,
  };
};

export default usePopcornPartyMutation;
