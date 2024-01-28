export type TCategory = {
  CASUAL: '정기상영';
  ASSIGNMENT: '과제상영';
  SPECIAL: '특별상영';
  ETC: '기타';
  GRADUATE: '졸업상영';
};
export type TEngCategory = keyof TCategory;
export type TKorCategory = TCategory[TEngCategory];

export const EngCategoryValues: Array<TEngCategory> = [
  'CASUAL',
  'ASSIGNMENT',
  'SPECIAL',
  'ETC',
  'GRADUATE',
];
export const KorCategoryValues: Array<TCategory[TEngCategory]> = [
  '정기상영',
  '과제상영',
  '특별상영',
  '졸업상영',
  '기타',
];
