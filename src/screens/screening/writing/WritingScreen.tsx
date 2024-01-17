import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import ScreeningGallery from './components/screeningGallery';
import {useRef, useState} from 'react';

import {TextInput, View} from 'react-native';
import {writingStyles} from './WritingScreen.style';
import CheckBox from '@/components/checkBox';
import ButtonInput from '@/components/inputs/buttonInput';
import Select from '@/components/select';
import TextArea from '@/components/inputs/textArea';
import DismissKeyboardView from '@/components/dismissKeyboardView';
import Input from '@/components/input';

const WritingScreen = () => {
  // TODO: 작성하기 api body 타입 추가
  const [inputValues, setInputValues] = useState({
    image: '',
    title: '',
    screening: '',
    group: '',
    startDate: undefined, // type: DateParsable | undefined
    endDate: undefined, // type: DateParsable | undefined
    time: undefined,
    location: '',
    description: '',
    url: '',
    phone: '',
    email: '',
  });

  const [agree, setAgree] = useState<boolean>(false);

  const onChangeInput = (inputName: string, value: string) => {
    setInputValues({...inputValues, [inputName]: value});
  };

  const canGoNext = false; // 작성 완료 버튼 활성화 여부

  const titleRef = useRef<TextInput | null>(null);
  const screeningRef = useRef<TextInput | null>(null);

  const descriptionRef = useRef<TextInput | null>(null);
  const urlRef = useRef<TextInput | null>(null);
  const phoneRef = useRef<TextInput | null>(null);
  const emailRef = useRef<TextInput | null>(null);

  const handleScreeningMake = () => {
    // 상영회 등록하기 api 호출
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
        <ScreeningGallery />

        {/*타이틀*/}
        <View style={writingStyles.container}>
          <Input
            value={inputValues.title}
            title="타이틀"
            placeholder="상영회 제목을 입력하세요"
            onChangeInput={value => onChangeInput('title', value)}
            maxLength={15}
            content="15자 이내로 상영회 제목을 입력해주세요"
            inputRef={titleRef}
            returnKeyType="next"
            onSubmitEditing={() => screeningRef.current?.focus()}
          />
        </View>

        {/*주최명*/}
        <View style={writingStyles.container}>
          <Input
            value={inputValues.screening}
            title="주최명"
            placeholder="학과명, 동아리명 등 주최를 적어주세요."
            onChangeInput={(value: string) => onChangeInput('screening', value)}
            maxLength={15}
            content="15자 이내로 주최명을 입력해주세요"
            inputRef={screeningRef}
            returnKeyType="next"
          />
        </View>

        {/*분류*/}
        <View style={writingStyles.container}>
          <Select
            options={['상영회', '영화제', '시사회']}
            title="분류"
            value={inputValues.group}
            setValue={value => onChangeInput('group', value)}
            placeholder="선택하기"
          />
        </View>

        {/*날짜*/}
        <View style={writingStyles.container}>
          <ButtonInput
            value={inputValues}
            placeholder="시작일과 종료일을 선택해주세요"
            title="날짜"
            category="date"
            setValue={setInputValues}
          />
        </View>

        {/*시간*/}
        <View style={writingStyles.container}>
          <ButtonInput
            value={inputValues.time}
            placeholder="시간을 선택해주세요"
            title="시간"
            category="time"
            setValue={value => onChangeInput('time', value)}
          />
        </View>

        {/*장소 => kakao 장소 검색*/}
        <View style={writingStyles.container}>
          <ButtonInput
            value={inputValues}
            placeholder="장소 검색 해보세요"
            title="장소"
            category="location"
            setValue={setInputValues}
          />
        </View>

        {/*추가 설명*/}
        <View style={writingStyles.container}>
          <TextArea
            value={inputValues.description}
            onChangeInput={value => onChangeInput('description', value)}
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
            value={inputValues.url}
            title="관람 신청 URL"
            placeholder="관람 신청 URL을 입력해주세요"
            onChangeInput={value => onChangeInput('url', value)}
            keyBoardType="url"
            inputRef={urlRef}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current?.focus()}
          />
        </View>

        {/*주최 연락처*/}
        <View style={writingStyles.container}>
          <Input
            value={inputValues.phone}
            title="주최 연락처"
            placeholder="주최 연락처를 입력해주세요"
            onChangeInput={value => onChangeInput('phone', value)}
            keyBoardType="phone"
            maxLength={13}
            errorContent="전화번호 형식을 맞춰주세요"
            inputRef={phoneRef}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
          />
        </View>

        {/*주최 이메일*/}
        <View style={writingStyles.container}>
          <Input
            value={inputValues.email}
            title="주최 이메일"
            placeholder="주최 이메일을 입력해주세요"
            onChangeInput={value => onChangeInput('email', value)}
            keyBoardType="email"
            errorContent="이메일 형식을 맞춰주세요"
            inputRef={emailRef}
          />
        </View>
        <View style={writingStyles.content}>
          <Typography style="Label1" color={palette.Text.Normal}>
            게시글 정책을 확인했어요.
          </Typography>
          <CheckBox
            state={agree ? 'on' : 'off'}
            onPress={() => {
              setAgree(!agree);
            }}
          />
        </View>
        <Typography style="Body2" color={palette.Text.Alternative} mt={4}>
          상영회는 등록 후 삭제할 수 없어요.
        </Typography>
        <Typography style="Body2" color={palette.Text.Alternative} mb={34}>
          수정이나 비공개 처리는 가능해요.
        </Typography>
      </DismissKeyboardView>
    </DefaultContainer>
  );
};
export default WritingScreen;
