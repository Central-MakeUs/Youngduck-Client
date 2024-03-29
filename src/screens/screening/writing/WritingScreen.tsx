import {useEffect, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import ScreeningGallery from './components/screeningGallery';
import ButtonInput from '@/components/inputs/buttonInput';
import Select from '@/components/select';
import TextArea from '@/components/inputs/textArea';
import DismissKeyboardView from '@/components/dismissKeyboardView';
import useHandleInput from './hooks/useHandleInput';
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';
import {ScreenRouteProp} from '@/types/navigator';
import useNavigator from '@/hooks/useNavigator';
import AgreeNoticeCard from '@/components/cards/agreeNoticeCard';
import stackScreens from '@/constants/stackScreens';
import {KorCategoryValues} from '@/models/enums/category';
import {getScreeningMyDetailContent} from '@/apis/screening/detail';
import CancelTopBar from '@/components/topBar/cancelTopBar';
import BottomBoxButton from '@/components/bottomButton/bottomBoxButton';
import Input from '@/components/textInput';
import DateRangeInput from '@/components/dateRangeInput';
import TimeInput from '@/components/timeInput';

import {writingStyles} from './WritingScreen.style';
import {getDatePrevious} from '@/utils/getDate';
import {showSnackBar} from '@/utils/showSnackBar';

interface IWritingScreenProps {
  route: ScreenRouteProp<'WritingScreen'>;
}
const WritingScreen = ({route: {params}}: IWritingScreenProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {type, search, id} = params;
  const {uploadScreening, modifyScreening} = useScreeningMutation();
  const {stackNavigation} = useNavigator();
  const {setModify, inputValues, onChangeInput, inputIsValid} =
    useHandleInput();

  useEffect(() => {
    onChangeInput('location', search);
  }, [search]);

  const {data} = useQuery({
    queryKey: ['screeningMyDetail'],
    queryFn: () => {
      if (id) {
        return getScreeningMyDetailContent(id);
      }
    },
    enabled: id === null,
  });

  useEffect(() => {
    if (id && type === 'modified' && data) {
      setModify(data.data);
    }
  }, []);

  const {
    screeningTitle,
    hostName,
    category,
    screeningStartDate,
    screeningEndDate,
    screeningStartTime,
    location,
    formUrl,
    hasAgreed,
    posterImgUrl,
  } = inputValues;

  const canGoNext =
    posterImgUrl &&
    hasAgreed &&
    screeningTitle &&
    hostName &&
    category &&
    screeningStartDate &&
    screeningEndDate &&
    screeningStartTime &&
    location &&
    formUrl;

  const titleRef = useRef<TextInput | null>(null);
  const screeningRef = useRef<TextInput | null>(null);
  const descriptionRef = useRef<TextInput | null>(null);
  const urlRef = useRef<TextInput | null>(null);
  const phoneRef = useRef<TextInput | null>(null);
  const emailRef = useRef<TextInput | null>(null);

  const goToKakaoSearch = () => {
    stackNavigation.navigate(stackScreens.KakaoSearchScreen, {type: type});
  };

  const handleWriteScreening = async () => {
    // 기간 유효성 검사
    if (
      inputValues.screeningStartDate &&
      !getDatePrevious(inputValues.screeningStartDate)
    ) {
      showSnackBar('상영회 시작일을 다시 선택해주세요');
      return;
    }
    // url 유효성 검사
    if (inputIsValid.formUrlValid) {
      showSnackBar('상영회 url 형식에 맞춰 다시 작성해주세요');
      return;
    }
    // 이메일 유효성 검사
    if (inputIsValid.emailIsValid) {
      showSnackBar('주최 이메일 형식에 맞춰 다시 작성해주세요');
      return;
    }
    setIsLoading(true);
    if (type === 'post') {
      await uploadScreening.mutateAsync(inputValues);
      setIsLoading(false);
    }
    if (type === 'modified' && data) {
      const body = {screeningId: data.data.screeningId, ...inputValues};
      await modifyScreening.mutateAsync(body);
      stackNavigation.navigate(stackScreens.MyDetailScreen, {
        id: data.data.screeningId,
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <DismissKeyboardView>
        <CancelTopBar
          text={type === 'post' ? '상영회 등록하기' : '상영회 수정하기'}
        />
        <DefaultContainer>
          <Typography
            mt={40}
            mb={20}
            style="Title2"
            color={palette.Another.Black}>
            상영 정보를 입력해주세요!
          </Typography>
          {/*갤러리 선택*/}
          <ScreeningGallery
            image={inputValues.posterImgUrl}
            setImage={value => onChangeInput('posterImgUrl', value)}
          />

          {/*타이틀*/}
          <View style={writingStyles.container}>
            <Input
              value={inputValues.screeningTitle}
              title="타이틀"
              placeholder="상영회 제목을 입력하세요"
              setValue={value => onChangeInput('screeningTitle', value)}
              maxLength={15}
              detail="15자 이내로 상영회 제목을 입력해주세요"
              inputRef={titleRef}
              returnKeyType="next"
              onSubmitEditing={() => screeningRef.current?.focus()}
              essential
            />
          </View>

          {/*주최명*/}
          <View style={writingStyles.container}>
            <Input
              value={inputValues.hostName}
              title="주최명"
              placeholder="학과명, 동아리명 등 주최를 적어주세요."
              setValue={(value: string) => onChangeInput('hostName', value)}
              maxLength={15}
              detail="15자 이내로 주최명을 입력해주세요"
              inputRef={screeningRef}
              returnKeyType="next"
              essential
            />
          </View>

          {/*분류*/}
          <View style={writingStyles.container}>
            <Select
              options={KorCategoryValues}
              title="분류"
              value={inputValues.category}
              setValue={value => onChangeInput('category', value)}
              placeholder="선택하기"
              essential
            />
          </View>

          {/*날짜*/}
          <View style={writingStyles.container}>
            {type === 'post' && (
              <DateRangeInput
                title="날짜"
                placeholder="시작일과 종료일을 선택해주세요"
                startDate={inputValues.screeningStartDate}
                setStartDate={value =>
                  onChangeInput('screeningStartDate', value)
                }
                setEndDate={value => onChangeInput('screeningEndDate', value)}
                endDate={inputValues.screeningEndDate}
                errorContent={'상영회 시작일이 오늘보다 이전이에요'}
                checkValue={() => {
                  if (
                    inputValues.screeningStartDate &&
                    inputValues.screeningEndDate
                  ) {
                    return getDatePrevious(inputValues.screeningStartDate);
                  }
                  return true;
                }}
                essential
              />
            )}
            {type === 'modified' &&
              inputValues.screeningStartDate &&
              inputValues.screeningEndDate && (
                <DateRangeInput
                  title="날짜"
                  placeholder="시작일과 종료일을 선택해주세요"
                  startDate={inputValues.screeningStartDate}
                  setStartDate={value =>
                    onChangeInput('screeningStartDate', value)
                  }
                  setEndDate={value => onChangeInput('screeningEndDate', value)}
                  endDate={inputValues.screeningEndDate}
                  errorContent={'상영회 시작일이 오늘보다 이전이에요'}
                  checkValue={() => {
                    if (
                      inputValues.screeningStartDate &&
                      inputValues.screeningEndDate
                    ) {
                      return getDatePrevious(inputValues.screeningStartDate);
                    }
                    return true;
                  }}
                  essential
                />
              )}
          </View>

          {/*시간*/}
          <View style={writingStyles.container}>
            <TimeInput
              value={inputValues.screeningStartTime}
              placeholder="시간을 선택해주세요"
              title="시간"
              setValue={value => onChangeInput('screeningStartTime', value)}
              essential
            />
          </View>

          {/*장소 => kakao 장소 검색*/}
          <View style={writingStyles.container}>
            <ButtonInput
              value={inputValues.location}
              placeholder="장소 검색 해보세요"
              title="장소"
              category="location"
              setValue={value => onChangeInput('location', value)}
              onPress={goToKakaoSearch}
              essential
            />
          </View>

          {/*추가 설명*/}
          <View style={writingStyles.moreInformation}>
            <TextArea
              value={inputValues.information}
              onChangeInput={value => onChangeInput('information', value)}
              maxLength={1000}
              placeholder={'추가로 안내할 내용이 있다면 적어주세요.'}
              height={144}
              title="추가 설명"
              inputRef={descriptionRef}
              onSubmitEditing={() => urlRef.current?.focus()}
            />
          </View>

          {/*관람신청 URL*/}
          <View style={writingStyles.container}>
            <Input
              value={inputValues.formUrl}
              title="관람 신청 URL"
              placeholder="관람 신청 URL을 입력해주세요"
              detail="관람 신청 URL을 입력해주세요"
              setValue={value => onChangeInput('formUrl', value)}
              inputRef={urlRef}
              returnKeyType="next"
              errorContent={inputIsValid.formUrlValid}
              onSubmitEditing={() => phoneRef.current?.focus()}
              keyboardType="url"
              essential
            />
          </View>

          {/*주최 연락처*/}
          <View style={writingStyles.container}>
            <Input
              value={inputValues.hostPhoneNumber}
              title="주최 연락처"
              placeholder="주최 연락처를 입력해주세요"
              detail="주최 연락처를 입력해주세요"
              setValue={value => onChangeInput('hostPhoneNumber', value)}
              maxLength={13}
              inputRef={phoneRef}
              returnKeyType="next"
              keyboardType="phone-pad"
              onSubmitEditing={() => emailRef.current?.focus()}
              textContentType="telephoneNumber"
            />
          </View>

          {/*주최 이메일*/}
          <View style={writingStyles.container}>
            <Input
              value={inputValues.hostEmail}
              title="주최 이메일"
              placeholder="주최 이메일을 입력해주세요"
              detail="주최 이메일을 입력해주세요"
              setValue={value => onChangeInput('hostEmail', value)}
              errorContent={inputIsValid.emailIsValid}
              inputRef={emailRef}
              autoComplete="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>

          <View style={writingStyles.bottom}>
            {type === 'post' && (
              <AgreeNoticeCard
                value={inputValues.hasAgreed}
                onChangeValue={() => {
                  onChangeInput('hasAgreed', !inputValues.hasAgreed);
                }}
                content="상영회는 등록 후 삭제할 수 없어요."
              />
            )}
          </View>
        </DefaultContainer>
      </DismissKeyboardView>
      <BottomBoxButton
        onPress={handleWriteScreening}
        disabled={!canGoNext || isLoading}>
        <Typography
          style="Label1"
          color={
            !canGoNext || isLoading
              ? palette.Another.White
              : palette.Another.Black
          }>
          {isLoading ? '로딩 중' : type === 'post' ? '등록하기' : '수정하기'}
        </Typography>
      </BottomBoxButton>
    </>
  );
};
export default WritingScreen;
