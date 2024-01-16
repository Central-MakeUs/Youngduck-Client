import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import ScreeningGallery from './components/screeningGallery';
import {useState} from 'react';
import TextInput from '@/components/inputs/textInput';
import {ScrollView} from 'react-native';

const WritingScreen = () => {
  const [inputValues, setInputValues] = useState({
    image: '',
    title: '',
    screening: '',
    group: '',
    startDate: '',
    endDate: '',
    time: '',
    location: '',
    description: '',
    url: '',
    phone: '',
    email: '',
  });

  const onChangeInput = (inputName: string, value: string) => {
    setInputValues({...inputValues, [inputName]: value});
  };

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
        <TextInput
          value={inputValues.title}
          title="타이틀"
          placeholder="타이틀을 입력해주세요"
          onChangeInput={value => onChangeInput('title', value)}
          content=""
          maxLength={9}
        />

        {/*주최명*/}
        <TextInput
          value={inputValues.screening}
          title="주최명"
          placeholder="주최명을 입력해주세요"
          onChangeInput={value => onChangeInput('screening', value)}
          content=""
          maxLength={9}
        />

        {/*분류 => select 컴포넌트*/}

        {/*날짜 => dateRangePicker 컴포넌트*/}

        {/*시간 => timePicker 컴포넌트*/}

        {/*장소 => kakao 장소 검색*/}

        {/*추가 설명 => textArea 컴포넌트*/}

        {/*관람신청 URL*/}
        <TextInput
          value={inputValues.url}
          title="관람 신청 URL"
          placeholder="관람 신청 URL을 입력해주세요"
          content=""
          onChangeInput={value => onChangeInput('url', value)}
          maxLength={100}
          keyBoardType="url"
        />

        {/*주최 연락처*/}
        <TextInput
          value={inputValues.phone}
          title="주최 연락처"
          placeholder="주최 연락처를 입력해주세요"
          content=""
          onChangeInput={value => onChangeInput('phone', value)}
          maxLength={100}
          keyBoardType="phone"
        />
      </ScrollView>
    </DefaultContainer>
  );
};
export default WritingScreen;
