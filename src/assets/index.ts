import {ImageSourcePropType} from 'react-native';

export interface Assets {
  [key: string]: ImageSourcePropType;
}

export const defaultImages: Assets = {
  loginPopcorn: require('@/assets/images/Bg-login.png'),
  completeSignupPopcorn: require('@/assets/images/Bg-fin.png'),
  pacong: require('@/assets/images/pacong.png'),
  popCornMate: require('@/assets/images/popcornmate.png'),
  writePopcorn: require('@/assets/images/bg-writeImage.png'),
  popCornParty: require('@/assets/images/bg-popcornParty.png'),

  //프로필 이미지(임시)
  profile1: require('@/assets/images/profile-1.png'),
  profile2: require('@/assets/images/profile-2.png'),
  profile3: require('@/assets/images/profile-3.png'),
};
