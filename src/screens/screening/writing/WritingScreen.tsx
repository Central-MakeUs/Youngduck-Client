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
      </ScrollView>
    </DefaultContainer>
  );
};
export default WritingScreen;
