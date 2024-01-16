export interface IPopcornTrendingCardDatas {
  id: number;
  title: string;
  imageURL: string;
}

export interface IRenderItemProps {
  item: IPopcornTrendingCardDatas;
  index: number;
}
