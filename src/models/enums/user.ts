export type TQuitReason =
  | 'NOT_USED'
  | 'UNCONFORTABLE'
  | 'USE_OTHER_SERVICE'
  | 'ETC';

export type TKorQuitReason =
  | '잘 사용하지 않아요'
  | '사용성이 불편해요'
  | '더 나은 서비스를 찾았어요'
  | '기타';

export const korQuitReason: Array<TKorQuitReason> = [
  '잘 사용하지 않아요',
  '사용성이 불편해요',
  '더 나은 서비스를 찾았어요',
  '기타',
];
