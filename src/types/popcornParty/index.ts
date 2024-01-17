export interface IPopcornTrendingCardDatas {
  id: number;
  title: string;
  imageURL: string;
}

export interface IPopcornItemProps {
  id: number;
  imageURL: string;
  title: string;
  count: number;
  nickname: string;
  content: string;
  isVoted: boolean;
}

export interface IRenderItemProps<T> {
  item: T;
  index: number;
}
