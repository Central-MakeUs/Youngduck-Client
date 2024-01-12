import React from 'react';
import {ScrollView} from 'react-native';
import {scrollStyles} from './DefaultScrollContainer.style';

interface DefaultScrollContainerProp {
  children: React.ReactNode;
}

const DefaultScrollContainer = ({children}: DefaultScrollContainerProp) => {
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={scrollStyles.container}>
      {children}
    </ScrollView>
  );
};

export default DefaultScrollContainer;
