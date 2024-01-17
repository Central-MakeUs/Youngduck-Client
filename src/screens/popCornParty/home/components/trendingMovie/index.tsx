import PopcornTrendingCard from '@/components/cards/popcornTrendingCard';
import SubTitle from '@/components/title/subTitle';
import {
  IPopcornTrendingCardDatas,
  IRenderItemProps,
} from '@/types/popcornParty';
import {FlatList} from 'react-native';

const TrendingMovie = () => {
  const popcornTrendingCardDatas: IPopcornTrendingCardDatas[] = [
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

  const withRankingItem = ({
    item,
    index,
  }: IRenderItemProps<IPopcornTrendingCardDatas>) => (
    <PopcornTrendingCard
      id={item.id}
      title={item.title}
      imageURL={item.imageURL}
      index={index}
      mode="with-ranking"
    />
  );
  return (
    <>
      <SubTitle text="이번 주 독립·예술 영화 TOP 5" mt={24} mb={8} />
      <FlatList
        horizontal
        data={popcornTrendingCardDatas}
        renderItem={withRankingItem}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default TrendingMovie;
