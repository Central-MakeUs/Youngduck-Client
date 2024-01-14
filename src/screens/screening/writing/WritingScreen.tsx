import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import ScreeningGallery from './components/screeningGallery';
import TextInput from '@/components/textInput';
import {useCallback, useState} from 'react';

const WritingScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [group, setGroup] = useState<string>('');

  const onChangeTitle = useCallback((text: string) => {
    setTitle(text);
  }, []);

  const onChangeGroup = useCallback((group: string) => {
    setGroup(group);
  }, []);
  return (
    <DefaultContainer>
      <Typography mt={40} mb={20} style="Title2" color={palette.Another.Black}>
        상영 정보를 입력해주세요!
      </Typography>
      {/*갤러리 선택*/}
      <ScreeningGallery />

      {/*타이틀*/}
      <TextInput
        value={title}
        placeholder="입력해주세용"
        onChangeInput={onChangeTitle}
        maxLength={10}
        title="타이틀"
        content="타이틀을 입력해주세요"
      />

      {/*주최명*/}
      <TextInput
        value={group}
        placeholder="입력해주세용"
        onChangeInput={onChangeGroup}
        maxLength={10}
        title="주최명"
        content="주최명을 입력해주세요"
      />
    </DefaultContainer>
  );
};
export default WritingScreen;
