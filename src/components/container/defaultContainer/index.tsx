import React from 'react';
import {View} from 'react-native';
import {defaultContainerStyles} from './DefaultContainer.style';

interface DefaultContainerProps {
  children: React.ReactNode;
}

const DefaultContainer = ({children}: DefaultContainerProps) => {
  return <View style={defaultContainerStyles.container}>{children}</View>;
};
export default DefaultContainer;
