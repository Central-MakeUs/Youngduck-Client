import ReactNativeBlobUtil from 'react-native-blob-util';

import {getImageUpload} from '@/apis/image/image';

export const uploadScreeningImage = async (imageUri: string) => {
  const data = await getImageUpload();
  await uploadImageToS3(data.data.data, imageUri);
  const parts = data.data.data.split('?');
  return parts[0];
};

// 생성된 presigned url로 이미지를 전송
const uploadImageToS3 = async (url: string, imageUri: string) => {
  await ReactNativeBlobUtil.fetch(
    'PUT',
    url,
    {
      'Content-Type': 'image/jpeg',
    },
    ReactNativeBlobUtil.wrap(imageUri),
  );
};
