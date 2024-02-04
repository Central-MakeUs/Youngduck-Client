import {TKorQuitReason, TQuitReason} from '@/models/enums/user';

export const getQuitReason = (reason: TKorQuitReason): TQuitReason => {
  const reasonMap: Record<TKorQuitReason, TQuitReason> = {
    '잘 사용하지 않아요': 'NOT_USED',
    '사용성이 불편해요': 'UNCONFORTABLE',
    '더 나은 서비스를 찾았어요': 'USER_OTHER_SERVICE',
    기타: 'ETC',
  };
  return reasonMap[reason];
};
