import {defaultImages} from '@/assets';

export const getProfile = (profileNum: number) => {
  switch (profileNum) {
    case 1:
      return defaultImages.myPage1;
    case 2:
      return defaultImages.myPage2;
    case 3:
      return defaultImages.myPage3;
    default:
      return defaultImages.myPage1;
  }
};
