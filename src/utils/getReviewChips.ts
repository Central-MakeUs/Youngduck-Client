import {positiveAnswers, negativeAnswers} from '@/constants/review';
import {IPopcornReviewProps} from '@/models/myPage/response';
import {IChipProps} from '@/types/myPage';

export const getReviewChips = (item: IPopcornReviewProps) => {
  const chips: IChipProps[] = [];
  const positiveKeys = Object.keys(item.popcornPositive);
  Object.values(item.popcornPositive).map((value, idx) => {
    if (value) {
      chips.push({
        text: positiveAnswers[positiveKeys[idx]],
        isPositive: true,
      });
    }
  });
  const negativeKeys = Object.keys(item.popcornNegative);
  Object.values(item.popcornNegative).map((value, idx) => {
    if (value) {
      chips.push({
        text: negativeAnswers[negativeKeys[idx]],
        isPositive: false,
      });
    }
  });
  return chips;
};
