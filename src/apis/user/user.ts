import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {IUserDataResponse} from '@/models/user/response/userResponseDto';

// 유저 정보 가져오는 api
export const getUserData = async (): Promise<
  ResponseDTO<IUserDataResponse>
> => {
  const res = await api.get('/user/info');
  return res.data;
};

export const postNickname = async (
  nickname: string,
): Promise<ResponseDTO<{duplicate: boolean}>> => {
  const res = await api.post('/user/check', {nickname});
  return res.data;
};

export const updateNickname = async (nickname: string) => {
  const res = await api.patch('/user', {nickname});
  return res.data;
};
