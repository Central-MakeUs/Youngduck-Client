import {TEngCategory} from '@/models/enums/category';
import {TNonNullScreeningBodyRequest} from '../request/screeningRequestDto';

// 이번주 상영작 응답 타입
// 실시간 상영작 응답 타입
// 댓글 많은 상영작 응답 타입
export interface IWeekScreening extends TNonNullScreeningBodyRequest {
  screeningId: number;
  private: true;
  reviewCount: number;
}

export interface IWeekScreeningData extends Omit<IWeekScreening, 'category'> {
  category: TEngCategory;
}

export type TWeekScreeningResponse = IWeekScreeningData[];
