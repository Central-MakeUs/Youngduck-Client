import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import ScreeningGallery from './components/screeningGallery';
import {useState} from 'react';
import TextInput from '@/components/inputs/textInput';
import {ScrollView, View} from 'react-native';
import {writingStyles} from './WritingScreen.style';
import CheckBox from '@/components/checkBox';
import ButtonInput from '@/components/inputs/buttonInput';
import Select from '@/components/select';

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

  console.log('inputValues', inputValues);

  return (
    <DefaultContainer>
      <ScrollView>
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
          <TextInput
            value={inputValues.title}
            title="타이틀"
            placeholder="타이틀을 입력해주세요"
            onChangeInput={value => onChangeInput('title', value)}
            content=""
            maxLength={9}
          />
        </View>

        {/*주최명*/}
        <View style={writingStyles.container}>
          <TextInput
            value={inputValues.screening}
            title="주최명"
            placeholder="주최명을 입력해주세요"
            onChangeInput={value => onChangeInput('screening', value)}
            content=""
            maxLength={9}
          />
        </View>

        {/*분류 => select 컴포넌트*/}
        <View style={writingStyles.container}>
          <Select
            options={['상영회', '영화제', '시사회']}
            title="분류"
            value={inputValues.group}
            setValue={value => onChangeInput('group', value)}
            placeholder="선택하기"
          />
        </View>

        {/*날짜 => dateRangePicker 컴포넌트*/}
        <View style={writingStyles.container}>
          <ButtonInput
            value={inputValues}
            placeholder="시작일과 종료일을 선택해주세요"
            title="날짜"
            category="date"
            setValue={setInputValues}
          />
        </View>

        {/*시간 => timePicker 컴포넌트*/}
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

        {/*추가 설명 => textArea 컴포넌트*/}

        {/*관람신청 URL*/}
        <View style={writingStyles.container}>
          <TextInput
            value={inputValues.url}
            title="관람 신청 URL"
            placeholder="관람 신청 URL을 입력해주세요"
            content=""
            onChangeInput={value => onChangeInput('url', value)}
            maxLength={100}
            keyBoardType="url"
          />
        </View>

        {/*주최 연락처*/}
        <View style={writingStyles.container}>
          <TextInput
            value={inputValues.phone}
            title="주최 연락처"
            placeholder="주최 연락처를 입력해주세요"
            content=""
            onChangeInput={value => onChangeInput('phone', value)}
            maxLength={100}
            keyBoardType="phone"
          />
        </View>

        {/*주최 이메일*/}
        <View style={writingStyles.container}>
          <TextInput
            value={inputValues.email}
            title="주최 이메일"
            placeholder="주최 이메일을 입력해주세요"
            content=""
            onChangeInput={value => onChangeInput('email', value)}
            maxLength={100}
            keyBoardType="email"
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
      </ScrollView>
    </DefaultContainer>
  );
};
export default WritingScreen;
