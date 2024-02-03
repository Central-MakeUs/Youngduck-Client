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
