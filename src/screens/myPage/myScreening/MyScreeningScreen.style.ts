import {StyleSheet} from 'react-native';

interface IMyScreeningScreenStylesProp {
  bottom: number;
}

const MyScreeningScreenStyles = ({bottom}: IMyScreeningScreenStylesProp) =>
  StyleSheet.create({
    paddingWrap: {
      paddingHorizontal: 16,
    },
    screeningListContainer: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: bottom + 8,
    },
  });

export default MyScreeningScreenStyles;
