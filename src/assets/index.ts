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
  profile1: require('@/assets/images/profile1.png'),
};
