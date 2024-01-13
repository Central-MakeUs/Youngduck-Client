import {Dimensions} from 'react-native';

export const getScreenSize = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  return {screenWidth, screenHeight};
};
