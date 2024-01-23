import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailReviewScreen from './tabs/detailReviewScreen/DetailReviewScreen';
import palette from '@/styles/theme/color';
import {tabBarLabel} from '@/constants/tabScreens';
import {Text, View} from 'react-native';
import {ScreenRouteProp} from '@/types/navigator';
import DetailBottomButton from '@/components/bottomButtons/detailBottomButton';
import DetailTitle from './components/detailTitle';
import DetailImage from './components/detailImage';
import DetailInfoScreen from './tabs/detailInfoScreen/DetailInfoScreen';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import Typography from '@/components/typography';
import {useState} from 'react';
import TabBar from '@/components/tabBar';

const Tab = createMaterialTopTabNavigator();

type DetailScreenProps = {
  route: ScreenRouteProp<'DetailScreen'>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;

  const [currentTab, setCurrentTab] = useState<number>(0);

  // tab bar에 필요한 제목들 선언
  const tabBars = [
    {title: '스크리닝 정보', tabNumber: 0},
    {title: '리뷰', tabNumber: 1},
  ];
  return (
    <ImageContentScrollContainer>
      <View>
        <DetailTitle />

        <TabBar
          currentTabBarNumber={currentTab}
          setCurrentTabBarNumber={setCurrentTab}
          tabBars={tabBars}
        />

        {currentTab === 0 && <DetailInfoScreen />}
        {currentTab === 1 && <DetailReviewScreen />}
      </View>
    </ImageContentScrollContainer>
  );
};
export default DetailScreen;
