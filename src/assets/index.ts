import {ImageSourcePropType} from 'react-native';

export interface Assets {
  [key: string]: ImageSourcePropType;
}

export const defaultImages: Assets = {
  pacong: require('@/assets/images/pacong.png'),
  popCornMate: require('@/assets/images/popcornmate.png'),
  writePopcorn: require('@/assets/images/bg-writeImage.png'),
  popCornParty: require('@/assets/images/bg-popcornParty.png'),

  profile1: require('@/assets/images/profile-1.png'),
  profile2: require('@/assets/images/profile-2.png'),
  profile3: require('@/assets/images/profile-3.png'),

  myPage1: require('@/assets/images/my-page1.png'),
  myPage2: require('@/assets/images/my-page2.png'),
  myPage3: require('@/assets/images/my-page3.png'),
};
