import {TEngCategory, TKorCategory} from '@/models/enums/category';

const getCategory = (category: TEngCategory): TKorCategory => {
  const categoryMap: Record<TEngCategory, TKorCategory> = {
    CASUAL: '정기상영',
    ASSIGNMENT: '과제상영',
    SPECIAL: '특별상영',
    ETC: '기타',
    GRADUATE: '졸업상영',
  };
  return categoryMap[category];
};

export {getCategory};
