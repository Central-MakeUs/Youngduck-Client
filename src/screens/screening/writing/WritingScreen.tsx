import {useEffect, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import {DateParsable} from 'react-native-calendar-picker';

import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import ScreeningGallery from './components/screeningGallery';
import CheckBox from '@/components/checkBox';
import ButtonInput from '@/components/inputs/buttonInput';
import Select from '@/components/select';
import TextArea from '@/components/inputs/textArea';
import DismissKeyboardView from '@/components/dismissKeyboardView';
import Input from '@/components/input';
import BoxButton from '@/components/buttons/boxButton';
import {IScreeningBodyRequest} from '@/models/screening/request';
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';

import {writingStyles} from './WritingScreen.style';
import {ScreenRouteProp} from '@/types/navigator';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';

interface IWritingScreenProps {
  route: ScreenRouteProp<'WritingScreen'>;
}
const WritingScreen = ({route: {params}}: IWritingScreenProps) => {
  const {type, search} = params;

  useEffect(() => {
    onChangeInput('location', search);
  }, [search]);

  const {uploadScreening} = useScreeningMutation();
  const {stackNavigation} = useNavigator();
  const [inputValues, setInputValues] = useState<IScreeningBodyRequest>({
    posterImgUrl: '',
    screeningTitle: '',
    hostName: '',
    category: '',
    screeningStartDate: undefined,
    screeningEndDate: undefined,
    screeningStartTime: undefined,
    location: search,
    information: '',
    formUrl: '',
    hostPoneNumber: '',
    hostEmail: '',
    hasAgreed: false,
  });

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

  const onChangeInput = (
    inputName: string,
    value: string | DateParsable | undefined | boolean | Date,
  ) => {
    setInputValues({...inputValues, [inputName]: value});
  };

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
    //console.log('보내기', inputValues);
    await uploadScreening.mutateAsync(inputValues);
  };

  return (
    <DefaultContainer>
      <DismissKeyboardView>
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
            onChangeInput={value => onChangeInput('screeningTitle', value)}
            maxLength={15}
            content="15자 이내로 상영회 제목을 입력해주세요"
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
            onChangeInput={(value: string) => onChangeInput('hostName', value)}
            maxLength={15}
            content="15자 이내로 주최명을 입력해주세요"
            inputRef={screeningRef}
            returnKeyType="next"
            essential
          />
        </View>

        {/*분류*/}
        <View style={writingStyles.container}>
          <Select
            options={['상영회', '영화제', '시사회']}
            title="분류"
            value={inputValues.category}
            setValue={value => onChangeInput('category', value)}
            placeholder="선택하기"
            essential
          />
        </View>

        {/*날짜*/}
        <View style={writingStyles.container}>
          <ButtonInput
            value={inputValues}
            title="날짜"
            placeholder="시작일과 종료일을 선택해주세요"
            category="date"
            setValue={setInputValues}
            essential
          />
        </View>

        {/*시간*/}
        <View style={writingStyles.container}>
          <ButtonInput
            value={inputValues.screeningStartTime}
            placeholder="시간을 선택해주세요"
            title="시간"
            category="time"
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
        <View style={writingStyles.container}>
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
            onChangeInput={value => onChangeInput('formUrl', value)}
            inputRef={urlRef}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current?.focus()}
            essential
          />
        </View>

        {/*주최 연락처*/}
        <View style={writingStyles.container}>
          <Input
            value={inputValues.hostPoneNumber}
            title="주최 연락처"
            placeholder="주최 연락처를 입력해주세요"
            onChangeInput={value => onChangeInput('hostPoneNumber', value)}
            keyBoardType="phone"
            maxLength={13}
            errorContent="전화번호 형식을 맞춰주세요"
            inputRef={phoneRef}
            returnKeyType="next"
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
            onChangeInput={value => onChangeInput('hostEmail', value)}
            keyBoardType="email"
            errorContent="이메일 형식을 맞춰주세요"
            inputRef={emailRef}
            autoComplete="email"
            textContentType="emailAddress"
          />
        </View>
        <View style={writingStyles.content}>
          <Typography style="Label1" color={palette.Text.Normal}>
            게시글 정책을 확인했어요.
          </Typography>
          <CheckBox
            state={inputValues.hasAgreed ? 'on' : 'off'}
            onPress={() => {
              onChangeInput('hasAgreed', !inputValues.hasAgreed);
            }}
          />
        </View>
        <Typography style="Body2" color={palette.Text.Alternative} mt={4}>
          상영회는 등록 후 삭제할 수 없어요.
        </Typography>
        <Typography style="Body2" color={palette.Text.Alternative} mb={34}>
          수정이나 비공개 처리는 가능해요.
        </Typography>
        <BoxButton onPress={handleWriteScreening} mb={12} disabled={!canGoNext}>
          등록하기
        </BoxButton>
      </DismissKeyboardView>
    </DefaultContainer>
  );
};
export default WritingScreen;
