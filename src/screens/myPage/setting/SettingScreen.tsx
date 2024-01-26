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
import stackScreens from '@/constants/stackScreens';
import Config from 'react-native-config';
import Popup from '@/components/popup';
import {removeTokens} from '@/services/localStorage/localStorage';

const SettingScreen = () => {
  const {stackNavigation} = useNavigator();
  const [isServiceAlarmOn, setIsServiceAlarmOn] = useState<boolean>(false);
  const [isAdBenefitAlarmOn, setIsAdBenefitAlarmOn] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onCloseModal = async () => setIsVisible(false);

  const onLogout = async () => {
    onCloseModal();
    await removeTokens();
    // 로그아웃 후 이동하는 navigtion 설정하기
    // stackNavigation.popToTop();
  };

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
            text="서비스 이용 알림"
            subTitle={`관심 스크리닝 스케줄 알림 등\n이용 편의를 위한 알림을 드려요.`}
            textStyle="Label1"
            subTitleStyle="Body2"
          />
        </View>
        <Switch
          onPress={() => setIsServiceAlarmOn(!isServiceAlarmOn)}
          isOn={isServiceAlarmOn}
          mt={16}
        />
      </View>
      <View style={settingScreenStyles.alarmWarp}>
        <View>
          <SubTitleDescription
            text="광고성/혜택 정보 알림"
            subTitle={`이벤트, 혜택 알림 등 마케팅 알림을 드려요.`}
            textStyle="Label1"
            subTitleStyle="Body2"
          />
        </View>
        <Switch
          onPress={() => setIsAdBenefitAlarmOn(!isAdBenefitAlarmOn)}
          isOn={isAdBenefitAlarmOn}
          mt={16}
        />
      </View>
      <SubMenu
        text="약관 보기"
        onPress={() =>
          stackNavigation.navigate(stackScreens.AgreementScreen, {
            uri: Config.MARKETING_POLICY_URI,
          })
        }
        textStyle="Body1"
        mt={8}
      />
      <Divider height={8} mt={16} mb={16} />
      <SubTitle text="약관 및 개인정보 처리 방침" mb={8} />
      <SubMenu
        text="이용약관"
        onPress={() =>
          stackNavigation.navigate(stackScreens.AgreementScreen, {
            uri: Config.USAGE_POLICY_URI,
          })
        }
        mb={8}
      />
      <SubMenu
        text="개인정보처리방침"
        onPress={() =>
          stackNavigation.navigate(stackScreens.AgreementScreen, {
            uri: Config.PRIVACY_POLICY_URI,
          })
        }
        mb={8}
      />
      <View style={settingScreenStyles.appVersionWrap}>
        <Typography style="Body1">앱 버전</Typography>
        <Typography style="Body2" color={palette.Text.Alternative}>
          1.0
        </Typography>
      </View>
      <Divider height={8} mt={16} mb={16} />
      <Pressable
        style={settingScreenStyles.buttonWrap}
        onPress={() => setIsVisible(true)}>
        <Typography style="Body1">로그아웃하기</Typography>
      </Pressable>
      <Pressable
        style={settingScreenStyles.buttonWrap}
        onPress={() => stackNavigation.navigate(stackScreens.WithdrawScreen)}>
        <Typography style="Body1">탈퇴하기</Typography>
      </Pressable>
      <Popup
        isVisible={isVisible}
        title={'로그아웃할까요?'}
        content={''}
        onClose={onCloseModal}
        onPress={onLogout}
      />
    </>
  );
};

export default SettingScreen;