import Divider from '@/components/divider';
import Switch from '@/components/switch';
import SubTitle from '@/components/title/subTitle';
import SubTitleDescription from '@/components/title/subTitleDescription';
import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import useNavigator from '@/hooks/useNavigator';
import {useState} from 'react';
import {View} from 'react-native';
import settingScreenStyles from './SettingScreen.style';

const SettingScreen = () => {
  const {stackNavigation} = useNavigator();
  const [isAlarmOn, setIsAlarmOn] = useState<boolean>(false);
  return (
    <>
      <BackTitleTopBar
        text="설정"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
      <SubTitle text="알림 설정" />
      <View style={settingScreenStyles.alarmWarp}>
        <View>
          <SubTitleDescription
            text="푸시 알림"
            subTitle={`관심 스크리닝 상영일 하루 전\n스케줄 알림을 드려요.`}
            textStyle="Label1"
            subTitleStyle="Body2"
          />
        </View>
        <Switch
          onPress={() => setIsAlarmOn(!isAlarmOn)}
          isOn={isAlarmOn}
          mt={16}
        />
      </View>
      <Divider height={8} mt={16} mb={16} />
    </>
  );
};

export default SettingScreen;
