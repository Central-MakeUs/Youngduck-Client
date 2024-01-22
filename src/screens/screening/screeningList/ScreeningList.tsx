import {useState} from 'react';
import {ScrollView} from 'react-native';

import SelectButton from '@/components/buttons/selectButton';
import DefaultContainer from '@/components/container/defaultContainer';
import DismissKeyboardView from '@/components/dismissKeyboardView';
import Input from '@/components/input';
import ScreeningFilterList from './components/screeningFilterList';

import {screeningListStyles} from './ScreeningList.style';

const ScreeningListScreen = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const categoryOptions = ['전체', '졸업상영', '과제상영', '정기상영'];
  return (
    <DismissKeyboardView>
      <DefaultContainer>
        <Input
          value={searchInput}
          placeholder="상영회 타이틀, 주최명으로 검색"
          onChangeInput={value => setSearchInput(value)}
          mode="search"
          onSearchPress={() => {
            console.log('클릭');
          }}
        />
      </DefaultContainer>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={screeningListStyles.optionContainer}>
        {categoryOptions.map(option => (
          <SelectButton type={option} onPress={() => {}} isSelected={false} />
        ))}
      </ScrollView>
      <DefaultContainer>
        <ScreeningFilterList />
      </DefaultContainer>
    </DismissKeyboardView>
  );
};
export default ScreeningListScreen;
