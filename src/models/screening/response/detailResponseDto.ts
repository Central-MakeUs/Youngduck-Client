import {TEngCategory} from '@/models/enums/category';
import {TNonNullScreeningBodyRequest} from '../request/screeningRequestDto';

// 스크리닝 디테일 응답 타입
export interface IScreeningDetail extends TNonNullScreeningBodyRequest {
  screeningId: number;
  private: boolean;
  bookmarked: boolean;
  reviewed: boolean;
}

export interface IScreeningDetailContent
  extends Omit<IScreeningDetail, 'category'> {
  category: TEngCategory;
}

// 스크리닝 찜하기 응답 타입
export interface IScreeningBookMarkResponse {
  screeningId: number;
  canCancel: boolean;
  bookMarked: boolean;
}
