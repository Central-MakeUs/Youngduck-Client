import {defaultImages} from '@/assets';
import {BannerType, IBannerContent} from '@/types/ui';
import {StyleSheet} from 'react-native';

export const bannerContentStyles: Record<BannerType, IBannerContent> = {
  screening: {
    source: defaultImages.writePopcorn,
    title: '예비 영화인들의 작품을\n가장 빠르게 만나보세요',
    content: '자신의 상영회를 홍보하고 싶나요?',
    button: '상영회 등록하기',
  },
  popcornParty: {
    source: defaultImages.popCornParty,
    title: '요즘 핫한 이 영화,\n예비 영화인들의 감상을 모아봐요',
    content: '같이 얘기하고 싶은 영화가 있다면?',
    button: '팝콘작 추천하기',
  },
};
export const bannerStyles = StyleSheet.create({
  image: {
    width: '100%',
    position: 'relative',
    height: 194,
  },
  container: {
    position: 'absolute',
    paddingLeft: 16,
    paddingTop: 24,
    paddingBottom: 20,
  },
});
