import {ActivityIndicator, FlatList, View} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query';

import DefaultContainer from '@/components/container/defaultContainer';
import Divider from '@/components/divider';
import ScreeningItem from '@/components/items/screeningItem';
import {getTimeOptionScreeningList} from '@/apis/screening/screening';
import {TScreeningContent} from '@/models/screening/response';
import EmptyItem from '@/components/items/emptyItem';
import {TScreeningTimeOption} from '@/models/enums/time';
import {TEngCategory} from '@/models/enums/category';

interface IScreenFilterListProps {
  sortBy: TScreeningTimeOption;
  category: TEngCategory | '';
  search: string;
}
const ScreeningFilterList = ({
  sortBy,
  category,
  search,
}: IScreenFilterListProps) => {
  const {data, isFetchingNextPage, fetchNextPage} = useInfiniteQuery({
    queryKey: ['screeningFilter', sortBy, category],
    queryFn: ({pageParam = 0}) =>
      getTimeOptionScreeningList({
        page: pageParam,
        sortBy,
        category,
        size: 10,
      }),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      return lastPage.data.hasNext ? lastPage.data.page + 1 : undefined;
    },
    //enabled: searchText.length > 0,
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
      {data?.pages.flatMap(page => page.data.content) &&
        index !== data?.pages.flatMap(page => page.data.content).length - 1 && (
          <Divider height={2} mb={16} />
        )}
    </>
  );

  const onEndReachedHandler = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

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
              onEndReached={onEndReachedHandler}
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
