import {useState} from 'react';
import {ScrollView, View} from 'react-native';

import SelectButton from '@/components/buttons/selectButton';
import Input from '@/components/input';
import ScreeningFilterList from './components/screeningFilterList';
import DateOption from './components/dateOption';
import {TScreeningTimeOption} from '@/models/enums/time';
import {TEngCategory} from '@/models/enums/category';

import {screeningListStyles} from './ScreeningList.style';
import ScreeningSearchList from './components/screeningSearchList';

const ScreeningListScreen = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [category, setCategory] = useState<TEngCategory | ''>('');
  const categoryOptions: {label: string; value: TEngCategory | ''}[] = [
    {label: '전체', value: ''},
    {label: '졸업상영', value: 'ASSIGNMENT'},
    {label: '과제상영', value: 'CASUAL'},
    {label: '정기상영', value: 'SPECIAL'},
    {label: '기타', value: 'ETC'},
  ];
  const [date, setDate] = useState<TScreeningTimeOption>('createdAt');
  return (
    <View style={screeningListStyles.wrapper}>
      <View style={screeningListStyles.container}>
        <Input
          value={searchInput}
          placeholder="상영회 타이틀, 주최명으로 검색"
          onChangeInput={value => setSearchInput(value)}
          mode="search"
          onSearchPress={() => {
            console.log('클릭');
          }}
        />
      </View>
      <View
        style={
          searchInput.length > 0 && {
            paddingBottom: 12,
          }
        }>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={screeningListStyles.optionContainer}>
          {categoryOptions.map(option => (
            <SelectButton
              key={option.label}
              type={option.label}
              size="small"
              onPress={() => {
                setCategory(option.value);
              }}
              isSelected={option.value === category}
            />
          ))}
        </ScrollView>
      </View>
      {searchInput.length === 0 && (
        <>
          <View style={screeningListStyles.dateContainer}>
            <DateOption value={date} setValue={setDate} />
          </View>

          <ScreeningFilterList sortBy={date} category={category} />
        </>
      )}
      {searchInput.length > 0 && (
        <ScreeningSearchList category={category} search={searchInput} />
      )}
    </View>
  );
};
export default ScreeningListScreen;
