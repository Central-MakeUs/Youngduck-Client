import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailInfoScreen from './tabs/DetailInfoScreen';
import DetailReviewScreen from './tabs/DetailReviewScreen';
import palette from '@/styles/theme/color';
import {tabBarLabel} from '@/constants/tabScreens';

const Tab = createMaterialTopTabNavigator();

const DetailScreen = () => {
  return (
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
  );
};
export default DetailScreen;
