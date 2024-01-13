import {ImageSourcePropType} from 'react-native';

export interface Assets {
  [key: string]: ImageSourcePropType;
}

export const defaultImages: Assets = {
  loginPopcorn: require('@/assets/images/Bg-login.png'),
  popCornMate: require('@/assets/images/popcornmate.png'),
  writePopcorn: require('@/assets/images/bg-writeImage.png'),
  popCornParty: require('@/assets/images/bg-popcornParty.png'),
};
