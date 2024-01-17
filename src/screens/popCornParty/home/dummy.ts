import {
  IPopcornItemProps,
  IPopcornTrendingCardDatas,
} from '@/types/popcornParty';

export const popcornTrendingCardDatas: IPopcornTrendingCardDatas[] = [
  {
    id: 1,
    title: '서울의 봄',
    imageURL:
      'https://i.namu.wiki/i/dQYtrYCT20iBXl8NVB32m-USGBNORan-hsEgwrGpEQeivNd-R-MTfLh0v01lmGV3CUc4PMCuW6BEswVt_Gt6MQ.webp',
  },
  {
    id: 2,
    title: '괴물',
    imageURL:
      'https://i.namu.wiki/i/xoFdTPahA5zVpatBP8fIu0E4e91eDk1anqtSKYZ6ZLsFXjop0EFG8B2Ulo5n5FxQ-E1ZebnHY3Nq13ttK3Bv8A.webp',
  },
  {
    id: 3,
    title: '사랑은 낙엽을 타고',
    imageURL:
      'https://i.namu.wiki/i/n_qL4KbUTF65R8gx5RMGOX5-XXhjJSwerb_1M2BegVG_ER5kbPHSP8r-N7j75DWxQj38ThScfUOFMag4u-hTxA.webp',
  },
  {
    id: 4,
    title: '클레오의 세계',
    imageURL:
      'https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87868/87868222286_727.jpg',
  },
];

export const popcornDatas: IPopcornItemProps[] = [
  {
    id: 1,
    imageURL:
      'data:image/png;base64,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',
    title: '사랑의 스잔나',
    count: 25,
    nickname: '송준수',
    content:
      '감상평이 극과 극으로 많이 갈리는 편인거 같아서 팝콘메이트들의 생각이 궁금해요!',
    isVoted: true,
  },
  {
    id: 2,
    imageURL:
      'https://img1.daumcdn.net/thumb/C500x500/?fname=http://t1.daumcdn.net/brunch/service/user/21Ng/image/2wao1rBYvJcayGVVbZlBWL9B0gc.jpg',
    title: '물비늘',
    count: 24,
    nickname: '임승현',
    content: '좋은 평밖에 없어서 그런지 영화 전공자들의 의견이 듣고 싶어요.',
    isVoted: false,
  },
  {
    id: 3,
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeJlWa_eTWpiP9FBsxUOowgW7NXjhpdYSxQ&usqp=CAU',
    title: '조이랜드',
    count: 18,
    nickname: '사임 사디크',
    content:
      '퀄리티는 좋은데 내용이 심오하다고 해서 영덕들의 의견이 어떤지 궁금해요',
    isVoted: false,
  },
];