import Divider from '@/components/divider';
import Switch from '@/components/switch';
import SubTitle from '@/components/title/subTitle';
import SubTitleDescription from '@/components/title/subTitleDescription';
import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import useNavigator from '@/hooks/useNavigator';
import {useState} from 'react';
import {Pressable, View} from 'react-native';
import settingScreenStyles from './SettingScreen.style';
import SubMenu from '@/components/subMenu';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

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
      <SubTitle text="약관 및 개인정보 처리 방침" mb={8} />
      <SubMenu text="이용약관" onPress={() => {}} mb={8} />
      <SubMenu text="개인정보처리방침" onPress={() => {}} mb={8} />
      <View style={settingScreenStyles.appVersionWrap}>
        <Typography style="Body1">앱 버전</Typography>
        <Typography style="Body2" color={palette.Text.Alternative}>
          1.0
        </Typography>
      </View>
      <Divider height={8} mt={16} mb={16} />
      <Pressable style={settingScreenStyles.buttonWrap}>
        <Typography style="Body1">로그아웃하기</Typography>
      </Pressable>
      <Pressable style={settingScreenStyles.buttonWrap}>
        <Typography style="Body1">탈퇴하기</Typography>
      </Pressable>
    </>
  );
};

export default SettingScreen;
