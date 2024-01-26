import SelectButton from '@/components/buttons/selectButton';
import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';
import {ScreenRouteProp} from '@/types/navigator';
import {useState} from 'react';
import {View} from 'react-native';

interface IManageScreeningProp {
  route: ScreenRouteProp<stackScreens.ManageScreeningScreen>;
}

const ManageScreeningScreen = ({route: {params}}: IManageScreeningProp) => {
  const {stackNavigation} = useNavigator();
  const [isWatcedScreening, setIsWatcedScreening] = useState<boolean>(
    params.isWatcedScreening,
  );
  return (
    <>
      <BackTitleTopBar
        text="스크리닝 관리"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          flexWrap: 'wrap',
        }}>
        <SelectButton
          type="관람한 스크리닝"
          onPress={() => setIsWatcedScreening(true)}
          isSelected={isWatcedScreening}
        />
        <SelectButton
          type="관심 스크리닝"
          onPress={() => setIsWatcedScreening(false)}
          isSelected={!isWatcedScreening}
        />
      </View>
    </>
  );
};

export default ManageScreeningScreen;
