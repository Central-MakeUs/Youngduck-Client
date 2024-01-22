import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {IImageRequest} from '@/models/image/request';
import uuid from 'react-native-uuid';

// 이미지 업로드 함수
export const postImageUpload = async (
  image: IImageRequest,
): Promise<ResponseDTO<string>> => {
  const formData = new FormData();
  formData.append('file', {
    uri: image.path,
    name: `${uuid.v4()}.jpg`,
    type: image.mime,
  });
  const res = await api.post('/screening/image', formData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data.data;
};
