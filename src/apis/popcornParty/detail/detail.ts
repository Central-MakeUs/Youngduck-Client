import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {IPopcornPartyDetailResponse} from '@/models/popcornParty/reponse';

export const getPopcornPartyDetailData = async (
  popcornId: number,
): Promise<ResponseDTO<IPopcornPartyDetailResponse>> => {
  const res = await api.get(`/popcorn/${popcornId}`);
  return res.data;
};
