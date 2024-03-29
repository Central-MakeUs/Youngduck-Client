import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export interface ISignupCompleteScreenContainerStyles {
  top: number;
  bottom: number;
  width: number;
  height: number;
}

const signupCompleteScreenContainerStyles = ({
  top,
  bottom,
  width,
  height,
}: ISignupCompleteScreenContainerStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: top,
      paddingBottom: bottom,
      backgroundColor: palette.Background.Secondary,
    },
    image: {position: 'absolute', bottom: -bottom},
    pacongWrap: {
      width,
      height,
      position: 'absolute',
      justifyContent: 'center',
    },
    pacong: {
      position: 'absolute',
      alignSelf: 'center',
    },
    innerWrap: {
      flex: 1,
      padding: 16,
      marginTop: top + 24,
      justifyContent: 'space-between',
    },
  });

export default signupCompleteScreenContainerStyles;
