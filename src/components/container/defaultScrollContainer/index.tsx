import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {scrollStyles} from './DefaultScrollContainer.style';
import useRefreshing from '@/hooks/useRefresh';
import {QueryKey} from '@tanstack/react-query';

interface DefaultScrollContainerProp {
  children: React.ReactNode;
  queryKey?: QueryKey[] | QueryKey;
}

const DefaultScrollContainer = ({
  children,
  queryKey,
}: DefaultScrollContainerProp) => {
  const {onRefresh, isRefresh} = useRefreshing();
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={scrollStyles.container}
      refreshControl={
        <RefreshControl
          refreshing={isRefresh}
          onRefresh={() => onRefresh(queryKey!!)}
        />
      }>
      {children}
    </ScrollView>
  );
};

export default DefaultScrollContainer;
