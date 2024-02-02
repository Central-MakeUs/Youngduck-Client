import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View, Image, Pressable} from 'react-native';
import myManagementItemStyles from './MyManagementItem.style';
import Chip from '@/components/chip';
import BoxButton from '@/components/buttons/boxButton';
import {useState} from 'react';
import SvgIcons from '@/assets/svgIcons';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import Popup from '@/components/popup';
import {IChipProps} from '@/types/myPage';
import {defaultImages} from '@/assets';

interface IMyManagementItemProps {
  // 필수 props
  mode:
    | 'watched-screening' // 스크리닝 관리 -> 관람한 스크리닝
    | 'jjim-screening' // 스크리닝 관리 -> 관심 스크리닝
    | 'screening-review' // 리뷰 관리 -> 스크리닝 리뷰
    | 'popcorn-review' // 리뷰 관리 -> 팝콘작 리뷰
    | 'my-screening'; // 나의 스크리닝
  posterImgUrl: string;
  title: string;
  id: number;
  // 팝콘작 리뷰 props
  popcornOfWeek?: string;
  director?: string;
  // 스크리닝 리뷰 prop
  dateRange?: string;
  // 나의 리뷰 하단 props
  chips?: (IChipProps | undefined)[];
  review?: string;
  // 나의 스크리닝 공개 여부 prop
  isPrivate?: boolean;
  jjimOffMutate?: (screeningId: number) => void;
}

const MyManagementItem = ({
  mode,
  posterImgUrl,
  title,
  id,
  popcornOfWeek,
  director,
  dateRange,
  chips,
  review,
  isPrivate,
  jjimOffMutate,
}: IMyManagementItemProps) => {
  const [isOpenedUp, setIsOpenedUp] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const {stackNavigation} = useNavigator();

  const onClosePopupPress = () => setIsPopupOpen(false);

  const onJjimOffPress = () => {
    onClosePopupPress();
    jjimOffMutate && jjimOffMutate(id);
  };

  return (
    <View style={myManagementItemStyles.container}>
      <Popup
        title="관람 예정을 취소할까요?"
        content={`관람 예정 설정된 작품(찜)만\n관람 후 리뷰를 작성할 수 있어요.`}
        isVisible={isPopupOpen}
        onClose={onClosePopupPress}
        onPress={onJjimOffPress}
      />
      <Pressable
        style={myManagementItemStyles.wrap}
        onPress={() =>
          stackNavigation.navigate(stackScreens.MyDetailScreen, {id})
        }>
        <Image
          source={posterImgUrl ? {uri: posterImgUrl} : defaultImages.emptySmall}
          style={myManagementItemStyles.image}
        />
        <View style={myManagementItemStyles.contentContainer}>
          <View style={myManagementItemStyles.contentWrap}>
            {mode !== 'popcorn-review' ? (
              // 팝콘작 리뷰가 아닌 모든 경우에는 제목과 상영 날짜가 들어감
              <>
                <Typography style="Label1">{title}</Typography>
                <Typography style="Chips1" color={palette.Text.Alternative}>
                  {dateRange!}
                </Typography>
              </>
            ) : (
              // 팝콘작 리뷰의 경우 팝콘작 선정 기간, 제목, 감독명이 들어감
              <>
                <Typography style="Label2">{popcornOfWeek!}</Typography>
                <Typography style="Title2">{title}</Typography>
                <Typography style="Body2" color={palette.Text.Alternative}>
                  {director!}
                </Typography>
              </>
            )}
          </View>
          {mode === 'watched-screening' && (
            <View style={myManagementItemStyles.deactivatedButtonWrap}>
              <SvgIcons.Pencil
                width={12}
                height={12}
                fill={palette.Text.Alternative}
              />
            </View>
          )}
          {mode === 'jjim-screening' && (
            <Pressable
              style={myManagementItemStyles.activatedButtonWrap}
              onPress={() => setIsPopupOpen(true)}>
              <SvgIcons.Heart
                width={12}
                height={12}
                fill={palette.Primary.Deep}
              />
            </Pressable>
          )}
          {mode === 'my-screening' && (
            // 나의 스크리닝인 경우 공개/비공개 여부 텍스트
            <Typography
              style="Chips2"
              color={isPrivate ? palette.Text.Assistive : palette.Primary.Deep}>
              {isPrivate ? '비공개' : '공개'}
            </Typography>
          )}
        </View>
      </Pressable>
      {(mode === 'screening-review' || mode === 'popcorn-review') && (
        // 리뷰 관리 모드에는 하단에 리뷰 칩과 리뷰가 있음
        <View style={myManagementItemStyles.reviewContainer}>
          <View style={myManagementItemStyles.reviewWrap}>
            {/* 리뷰 후기들에 대해 반복문 해주기 */}
            {chips &&
              chips.map(chip => (
                <View
                  style={myManagementItemStyles.reviewChip}
                  key={`${title}-${chip}-wrap`}>
                  <Chip
                    text={chip?.text!}
                    state={chip?.isPositive ? 'primary' : 'default'}
                    mb={4}
                    key={`${title}-${chip}`}
                  />
                </View>
              ))}
          </View>
          {isOpenedUp && (
            <Typography style="Body1" numberOfLines={-1} mb={16}>
              {review!}
            </Typography>
          )}
          <BoxButton
            onPress={() => setIsOpenedUp(!isOpenedUp)}
            variant="default">
            {isOpenedUp ? '접기' : '후기 펼쳐보기'}
          </BoxButton>
        </View>
      )}
    </View>
  );
};

export default MyManagementItem;
