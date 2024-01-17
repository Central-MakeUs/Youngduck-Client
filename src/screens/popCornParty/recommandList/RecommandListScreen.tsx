import DefaultContainer from '@/components/container/defaultContainer';
import PopcornItem from '@/components/items/popcornItem';
import SubTitleDescription from '@/components/title/subTitleDescription';
import {IPopcornItemProps, IRenderItemProps} from '@/types/popcornParty';
import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {defaultDatas, moreDats} from './dummy';

function RecommandListScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popcornDatas, setPopcornDatas] =
    useState<IPopcornItemProps[]>(defaultDatas);

  const renderItem = ({item}: IRenderItemProps<IPopcornItemProps>) => (
    <PopcornItem
      key={item.title}
      id={item.id}
      imageURL={item.imageURL}
      title={item.title}
      count={item.count}
      nickname={item.nickname}
      content={item.content}
      isVoted={item.isVoted}
    />
  );

  const renderMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPopcornDatas([...popcornDatas, ...moreDats]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <DefaultContainer>
      <SubTitleDescription
        text="다음 주 팝콘작 투표"
        subTitle={`1월 7일 ~ 1월 13일의 팝콘작을 선정해 주세요.\n상위 3편의 영화가 다음 주 오픈됩니다.`}
        mb={8}
      />
      <FlatList
        data={popcornDatas}
        renderItem={renderItem}
        keyExtractor={(item: IPopcornItemProps) => item.id.toString()}
        onEndReached={renderMoreItems}
      />
      {isLoading && <ActivityIndicator style={{marginBottom: 10}} />}
    </DefaultContainer>
  );
}

export default RecommandListScreen;
