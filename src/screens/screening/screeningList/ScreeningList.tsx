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
  const categoryOptions = [
    {label: '전체', value: 'ALL'},
    {label: '졸업상영', value: 'ASSIGNMENT'},
    {label: '과제상영', value: 'CASUAL'},
    {label: '정기상영', value: 'SPECIAL'},
    {label: '기타', value: 'ETC'},
  ];
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
          <SelectButton
            type={option.label}
            onPress={() => {
              setCategory(option.value);
            }}
            isSelected={option.value === category}
          />
        ))}
      </ScrollView>
      <DefaultContainer>
        <ScreeningFilterList />
      </DefaultContainer>
    </DismissKeyboardView>
  );
};
export default ScreeningListScreen;
