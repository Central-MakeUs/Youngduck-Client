import {
  FlatList,
  Keyboard,
  Pressable,
  RefreshControl,
  View,
} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query';

import DefaultContainer from '@/components/container/defaultContainer';
import Divider from '@/components/divider';
import ScreeningItem from '@/components/items/screeningItem';
import {
  getSearchScreeningList,
  getTimeOptionScreeningList,
} from '@/apis/screening/list';
import {TScreeningContent} from '@/models/screening/response/listResponseDto';
import Loading from '@/components/loading';
import EmptyItem from '@/components/items/emptyItem';
import {TEngCategory} from '@/models/enums/category';
import {
  InfiniteData,
  getInfiniteQueryArray,
} from '@/utils/getInfiniteQueryArray';
import {TScreeningTimeOption} from '@/models/enums/time';

import {screeningSearchListStyles} from './ScreeningSearchList.style';
import LoadingPage from '@/components/pages/loadingPage';
import useRefreshing from '@/hooks/useRefresh';

interface IScreenFilterListProps {
  category: TEngCategory | '';
  search: string;
  sortBy: TScreeningTimeOption;
}
const ScreeningSearchList = ({
  category,
  search,
  sortBy,
}: IScreenFilterListProps) => {
  const {onRefresh, isRefresh} = useRefreshing();
  const {data, isFetchingNextPage, fetchNextPage, isLoading} = useInfiniteQuery(
    {
      queryKey: ['screeningSearch', search, category, sortBy],
      queryFn: ({pageParam = 0}) =>
        search.length > 0
          ? getSearchScreeningList({
              page: pageParam,
              title: search,
              category,
              size: 10,
            })
          : getTimeOptionScreeningList({
              page: pageParam,
              sortBy,
              category,
              size: 10,
            }),
      initialPageParam: 0,
      getNextPageParam: lastPage => {
        return lastPage.data.hasNext ? lastPage.data.page + 1 : undefined;
      },
    },
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  const screeningSearchLists = getInfiniteQueryArray<TScreeningContent>(
    data as InfiniteData<TScreeningContent>,
  );

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
      {screeningSearchLists && index !== screeningSearchLists.length - 1 && (
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
    <Pressable
      style={screeningSearchListStyles.wrapper}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <DefaultContainer>
        {screeningSearchLists?.length === 0 && (
          <View style={screeningSearchListStyles.wrapper}>
            <EmptyItem size="large" text="검색 결과가 나오지 않아요." />
          </View>
        )}
        {screeningSearchLists && screeningSearchLists?.length > 0 && (
          <FlatList
            onEndReached={onEndReachedHandler}
            data={screeningSearchLists}
            renderItem={screeningListItem}
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.6}
            refreshControl={
              <RefreshControl
                refreshing={isRefresh}
                onRefresh={() => onRefresh(['screeningSearch'])}
              />
            }
          />
        )}

        {isFetchingNextPage && (
          <View style={screeningSearchListStyles.bottom}>
            <Loading />
          </View>
        )}
      </DefaultContainer>
    </Pressable>
  );
};
export default ScreeningSearchList;
