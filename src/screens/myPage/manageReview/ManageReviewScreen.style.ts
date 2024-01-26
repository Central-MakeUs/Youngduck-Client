import {StyleSheet} from 'react-native';

interface IManageReviewScreenStylesProp {
  bottom: number;
}

const manageReviewScreenStyles = ({bottom}: IManageReviewScreenStylesProp) =>
  StyleSheet.create({
    menuWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 16,
    },
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

export default manageReviewScreenStyles;
