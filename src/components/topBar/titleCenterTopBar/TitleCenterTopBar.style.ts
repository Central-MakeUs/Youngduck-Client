import palette from '@/styles/theme/color';
import {CommonTopProp} from '@/types/ui';
import {StyleSheet} from 'react-native';

const titleCenterTopBarStyles = ({top}: CommonTopProp) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 16,
      paddingTop: 16 + top,
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: palette.Line.Normal,
    },
    arrow: {
      position: 'absolute',
      alignSelf: 'flex-end',
      paddingBottom: 16,
      paddingLeft: 16,
      zIndex: 1,
    },
    topBar: {flex: 1, alignItems: 'center'},
  });

export default titleCenterTopBarStyles;
