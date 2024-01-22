import {api} from '@/apis';
import {ResponseDTO} from '@/models/common/responseDTO';
import {IImageRequest} from '@/models/image/request';

// 이미지 업로드 함수
export const postImageUpload = async (
  image: IImageRequest,
): Promise<ResponseDTO<string>> => {
  const formData = new FormData();
  formData.append('file', {
    uri: image.path,
    name: `${125}.jpg`,
    type: image.mime,
  });
  const res = await api.post('/screening/image', formData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log('실행은 되는 건가', res.data);
  return res.data;
};
