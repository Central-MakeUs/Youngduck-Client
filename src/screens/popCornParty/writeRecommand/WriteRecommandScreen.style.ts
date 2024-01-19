import {StyleSheet} from 'react-native';

interface IWriteRecommandScreenStylesProp {
  bottom: number;
}

const writeRecommandScreenStyles = ({
  bottom,
}: IWriteRecommandScreenStylesProp) =>
  StyleSheet.create({
    container: {flex: 1},
    buttonMargin: {
      marginBottom: 24,
    },
    agreementWrap: {
      flexDirection: 'row',
      paddingRight: 24,
    },
    paddingCheckBox: {paddingTop: 16},
    registerButton: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: bottom + 16,
    },
  });

export default writeRecommandScreenStyles;
