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


  emptyPopcorn: require('@/assets/images/empty.png'),
  emptyMovie: require('@/assets/images/empty-movie.png'),
  emptyCard: require('@/assets/images/empty-card.png'),
  emptyList: require('@/assets/images/empty-list.png'),
  emptyLarge: require('@/assets/images/empty-large.png'),
  emptyMedium: require('@/assets/images/empty-medium.png'),
  emptySmall: require('@/assets/images/empty-small.png'),

  profile1: require('@/assets/images/profile-1.png'),
  profile2: require('@/assets/images/profile-2.png'),
  profile3: require('@/assets/images/profile-3.png'),

  myPage1: require('@/assets/images/my-page1.png'),
  myPage2: require('@/assets/images/my-page2.png'),
  myPage3: require('@/assets/images/my-page3.png'),
};
