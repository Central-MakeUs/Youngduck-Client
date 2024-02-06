import {useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import MultiButton from '@/components/buttons/multibutton';
import Popup from '@/components/popup';
import Select from '@/components/select';
import SubTitleDescription from '@/components/title/subTitleDescription';
import TitleCenterTopBar from '@/components/topBar/titleCenterTopBar';
import useNavigator from '@/hooks/useNavigator';
import {TKorQuitReason, korQuitReason} from '@/models/enums/user';
import {getAppleUser} from '@/services/localStorage/localStorage';
import {getQuitReason} from '@/utils/getQuitReason';
import useUserMutation from '@/hooks/mutaions/useUserMutation';

const WithdrawScreen = () => {
  const {stackNavigation} = useNavigator();
  const {quitUser} = useUserMutation();
  const {bottom} = useSafeAreaInsets();
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] =
    useState<boolean>(false);

  const [quitReason, setQuitReason] = useState<'' | TKorQuitReason>('');

  const onCloseModal = () => setIsWithdrawModalOpen(false);

  const onWithdrawClick = async () => {
    onCloseModal();

    if (quitReason) {
      const appleCode = await getAppleUser();
      quitUser.mutate({
        appleCode: appleCode || '',
        quitReason: getQuitReason(quitReason),
      });
    }
  };
  return (
    <>
      <Popup
        title="정말 탈퇴하시겠습니까?"
        content=""
        isVisible={isWithdrawModalOpen}
        onClose={onCloseModal}
        onPress={onWithdrawClick}
        type="error"
      />
      <TitleCenterTopBar title="탈퇴하기" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingTop: 24,
          paddingBottom: 16 + bottom,
          justifyContent: 'space-between',
        }}>
        <View>
          <SubTitleDescription
            text="정말 탈퇴하시겠어요?"
            subTitle="탈퇴 시 모든 개인 정보는 삭제돼요"
            mb={16}
          />
          <Select
            options={korQuitReason}
            title="탈퇴사유"
            value={quitReason}
            placeholder="선택하기"
            setValue={setQuitReason}
            essential
          />
        </View>
        <MultiButton
          leftButtonText="취소"
          rightButtonText="탈퇴하기"
          onLeftButtonPress={stackNavigation.goBack}
          onRightButtonPress={() => setIsWithdrawModalOpen(true)}
          variant="highlight"
          disabled={quitReason === ''}
        />
      </View>
    </>
  );
};

export default WithdrawScreen;
