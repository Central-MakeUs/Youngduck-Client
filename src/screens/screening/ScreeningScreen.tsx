import SubTitleTopBar from '@/components/topBar/subTitleTopBar';
import {View} from 'react-native';

function ScreeningScreen() {
  return (
    <View>
      {/*이미지 자리*/}
      <SubTitleTopBar text="이번주 스크리닝" mt={12} />
    </View>
  );
}

export default ScreeningScreen;
