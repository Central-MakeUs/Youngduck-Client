import uuid from 'react-native-uuid';

import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';

// 이미지 업로드 함수
export const getImageUpload = async (): Promise<
  ResponseDTO<ResponseDTO<string>>
> => {
  const fileName = uuid.v4().toString();
  const res = await api.get(`/screening/image/${fileName}`);
  return res.data;
};
