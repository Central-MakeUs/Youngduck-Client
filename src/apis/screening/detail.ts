import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {IScreeningDetailContent} from '@/models/screening/response';

// 스크리닝 디테일 id 정보 함수
export const getScreeningDetailContent = async (
  id: number,
): Promise<ResponseDTO<IScreeningDetailContent>> => {
  const res = await api.get(`/screening/${id}`);
  return res.data;
};
