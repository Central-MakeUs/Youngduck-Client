import {ActivityIndicator, FlatList, View} from 'react-native';

import DefaultContainer from '@/components/container/defaultContainer';
import Divider from '@/components/divider';
import ScreeningItem from '@/components/items/screeningItem';
import {useInfiniteQuery} from '@tanstack/react-query';
import {getTimeOptionScreeningList} from '@/apis/screening/screening';
import {TScreeningContent} from '@/models/screening/response';
import EmptyItem from '@/components/items/emptyItem';

const ScreeningFilterList = () => {
  const {data, isFetchingNextPage} = useInfiniteQuery({
    queryKey: ['screeningFilter'],
    queryFn: ({pageParam = 0}) =>
      getTimeOptionScreeningList({
        page: pageParam,
        sortBy: 'createdAt',
        category: 'ASSIGNMENT',
      }),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      return lastPage.data.hasNext ? lastPage.data.page + 1 : undefined;
    },
  });

  console.log('응답', data?.pages);

  const screeningListItem = ({
    item,
    index,
  }: {
    item: TScreeningContent;
    index: number;
  }) => (
    <>
      <ScreeningItem
        key={item.id}
        id={item.id}
        img={item.posterImgUrl}
        title={item.title}
        startDate={item.screeningStartDate}
        endDate={item.screeningEndDate}
        hostName={item.hostInfo.hostName}
      />
      <Divider height={2} mb={16} />
    </>
  );

  return (
    <View style={{flex: 1}}>
      <DefaultContainer>
        {data?.pages.flatMap(page => page.data.content)?.length === 0 && (
          <View style={{flex: 1}}>
            <EmptyItem size="large" text="검색 결과가 나오지 않아요." />
          </View>
        )}
        {data?.pages.flatMap(page => page.data.content) &&
          data?.pages.flatMap(page => page.data.content)?.length > 0 && (
            <FlatList
              data={data?.pages.flatMap(page => page.data.content) || []}
              renderItem={screeningListItem}
              keyExtractor={item => item.id.toString()}
              onEndReachedThreshold={0.6}
            />
          )}
        {isFetchingNextPage && <ActivityIndicator style={{marginBottom: 10}} />}
      </DefaultContainer>
    </View>
  );
};
export default ScreeningFilterList;
