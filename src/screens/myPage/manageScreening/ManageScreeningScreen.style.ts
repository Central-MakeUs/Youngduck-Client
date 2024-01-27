import {StyleSheet} from 'react-native';

interface IManageScreeningScreenStylesProp {
  bottom: number;
}

const manageScreeningScreenStyles = ({
  bottom,
}: IManageScreeningScreenStylesProp) =>
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

export default manageScreeningScreenStyles;
