import {useEffect, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';

import SelectButton from '@/components/buttons/selectButton';
import DateOption from './components/dateOption';
import {TScreeningTimeOption} from '@/models/enums/time';
import {TEngCategory} from '@/models/enums/category';
import ScreeningSearchList from './components/screeningSearchList';

import {screeningListStyles} from './ScreeningList.style';
import CustomTextInput from '@/components/inputs/customTextInput';
import SearchButton from '@/components/buttons/searchButton';

const ScreeningListScreen = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [category, setCategory] = useState<TEngCategory | ''>('');
  const categoryOptions: {label: string; value: TEngCategory | ''}[] = [
    {label: '전체', value: ''},
    {label: '졸업상영', value: 'GRADUATE'},
    {label: '과제상영', value: 'ASSIGNMENT'},
    {label: '정기상영', value: 'CASUAL'},
    {label: '특별상영', value: 'SPECIAL'},
    {label: '기타', value: 'ETC'},
  ];

  useEffect(() => {
    if (searchInput.length === 1) {
      setCategory('');
    }
  }, [searchInput]);
  const [date, setDate] = useState<TScreeningTimeOption>('createdAt');
  const onChangeInput = (e: string) => setSearchInput(e);
  return (
    <KeyboardAvoidingView style={screeningListStyles.wrapper}>
      <View style={screeningListStyles.wrapper}>
        <View style={screeningListStyles.container}>
          <CustomTextInput
            value={searchInput}
            placeholder="상영회 타이틀로 검색"
            onChangeText={onChangeInput}>
            <SearchButton onPress={() => {}} />
          </CustomTextInput>
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
          <View style={screeningListStyles.dateContainer}>
            <DateOption value={date} setValue={setDate} />
          </View>
        )}

        <ScreeningSearchList
          category={category}
          search={searchInput}
          sortBy={date}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ScreeningListScreen;
