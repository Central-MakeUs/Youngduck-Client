import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {
  INicknameDuplicationResponse,
  IUserDataResponse,
} from '@/models/user/response/userResponseDto';
import {TGenre} from '@/types/signup/genre';

// 유저 정보 가져오는 api
export const getUserData = async (): Promise<
  ResponseDTO<IUserDataResponse>
> => {
  const res = await api.get('/user/info');
  return res.data;
};

// 유저 장르 가져오는 api
export const getUserGenres = async (): Promise<ResponseDTO<TGenre[]>> => {
  const res = await api.get('/user/genres');
  return res.data;
};

// 유저 마케팅 여부 on/off api
export const patchMarketing = async () => {
  const res = await api.patch('/user/marketing-agreemnet');
  return res.data;
};

export const postNickname = async (
  nickname: string,
): Promise<ResponseDTO<INicknameDuplicationResponse>> => {
  const res = await api.post('/user/check', {nickname});
  return res.data;
};

export const updateNickname = async (nickname: string) => {
  const res = await api.patch('/user', {nickname});
  return res.data;
};
