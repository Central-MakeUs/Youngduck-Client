import {View} from 'react-native';
import {progressBarStyles} from './ProgressBar.style';

interface IProgressBarProps {
  currentScreen: number;
}

function ProgressBar({currentScreen}: IProgressBarProps) {
  const styles = progressBarStyles(currentScreen);
  return (
    <>
      <View style={styles.currentProgress} />
      <View style={styles.behind} />
    </>
  );
}

export default ProgressBar;
