import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailInfoScreen from './tabs/DetailInfoScreen';
import DetailReviewScreen from './tabs/DetailReviewScreen';
import palette from '@/styles/theme/color';
import {tabBarLabel} from '@/constants/tabScreens';
import {View} from 'react-native';
import {ScreenRouteProp} from '@/types/navigator';
import DetailBottomButton from '@/components/bottomButtons/detailBottomButton';

const Tab = createMaterialTopTabNavigator();

type DetailScreenProps = {
  route: ScreenRouteProp<'DetailScreen'>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: palette.Text.Normal,
          tabBarInactiveTintColor: palette.Text.Assistive,
          tabBarStyle: {backgroundColor: palette.Another.White},
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Pretendard',
            fontWeight: '600',
            lineHeight: 24,
          },
          tabBarIndicatorStyle: {
            backgroundColor: palette.Text.Normal,
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}>
        <Tab.Screen
          name={tabBarLabel.DetailInfoScreen}
          component={DetailInfoScreen}
        />
        <Tab.Screen
          name={tabBarLabel.DetailReviewScreen}
          component={DetailReviewScreen}
        />
      </Tab.Navigator>

      <View>
        <DetailBottomButton onPress={() => {}} />
      </View>
    </View>
  );
};
export default DetailScreen;
