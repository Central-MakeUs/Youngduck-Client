import {Dimensions, StyleSheet} from 'react-native';

const {height: deviceHeight} = Dimensions.get('window');

export const scrollStyles = StyleSheet.create({
  container: {
    height: deviceHeight - 80,
  },
});
