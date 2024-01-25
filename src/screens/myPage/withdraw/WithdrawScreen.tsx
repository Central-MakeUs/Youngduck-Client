import MultiButton from '@/components/buttons/multibutton';
import Popup from '@/components/popup';
import SubTitleDescription from '@/components/title/subTitleDescription';
import TitleCenterTopBar from '@/components/topBar/titleCenterTopBar';
import useNavigator from '@/hooks/useNavigator';
import {removeTokens} from '@/services/localStorage/localStorage';
import {useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const WithdrawScreen = () => {
  const {stackNavigation} = useNavigator();
  const {bottom} = useSafeAreaInsets();
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] =
    useState<boolean>(false);

  const onCloseModal = () => setIsWithdrawModalOpen(false);

  const onWithdrawClick = async () => {
    onCloseModal();
    await removeTokens();
    // 회원 탈퇴 후 이동하는 navigtion 설정하기
    // stackNavigation.popToTop();
  };
  return (
    <>
      <TitleCenterTopBar title="탈퇴하기" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingTop: 24,
          paddingBottom: 16 + bottom,
          justifyContent: 'space-between',
        }}>
        <SubTitleDescription
          text="정말 탈퇴하시겠어요?"
          subTitle={`탈퇴 시 작성한 모든 리뷰와 게시글이 삭제되고\n복구할 수 없어요.`}
        />
        <MultiButton
          leftButtonText="취소"
          rightButtonText="탈퇴하기"
          onLeftButtonPress={stackNavigation.goBack}
          onRightButtonPress={() => setIsWithdrawModalOpen(true)}
          variant="highlight"
        />
      </View>
      <Popup
        title="정말 탈퇴하시겠습니까?"
        content=""
        isVisible={isWithdrawModalOpen}
        onClose={onCloseModal}
        onPress={onWithdrawClick}
      />
    </>
  );
};

export default WithdrawScreen;
