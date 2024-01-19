import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailInfoScreen from './tabs/DetailInfoScreen';
import DetailReviewScreen from './tabs/DetailReviewScreen';

const Tab = createMaterialTopTabNavigator();

const DetailScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="First" component={DetailInfoScreen} />
      <Tab.Screen name="Second" component={DetailReviewScreen} />
    </Tab.Navigator>
  );
};
export default DetailScreen;
