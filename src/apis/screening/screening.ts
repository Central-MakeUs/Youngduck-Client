import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {IScreeningBodyRequest} from '@/models/screening/request';
import {IScreeningDetailResponse} from '@/models/screening/response';

// 스크리닝 업로드 함수
export const postScreening = async (
  body: IScreeningBodyRequest,
): Promise<ResponseDTO<IScreeningDetailResponse>> => {
  const res = await api.post('/screening/upload-screening', body);
  return res.data;
};
