import {ResponseDTO} from '@/models/common/responseDTO';
import {IScreeningInfinityResponse} from '@/models/screening/response';

export interface InfiniteData<T> {
  pageParams: number[];
  pages: ResponseDTO<IScreeningInfinityResponse<T>>[];
}
export const getInfiniteQueryArray = <T>(data: InfiniteData<T>) => {
  const array = data?.pages.flatMap(page => page.data.content);
  return array;
};
