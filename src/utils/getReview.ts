import {negativeReview, positiveReview} from '@/constants/review';

export const getReview = (
  page: 'popcorn' | 'screening',
  type: 'positive' | 'negative',
) => {
  if (page === 'screening' && type === 'positive') {
    return positiveReview;
  } else if (page === 'screening' && type === 'negative') {
    return negativeReview;
  }
};
