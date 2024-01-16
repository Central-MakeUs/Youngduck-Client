import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import ScreeningGallery from './components/screeningGallery';
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

      {/*주최명*/}
    </DefaultContainer>
  );
};
export default WritingScreen;
