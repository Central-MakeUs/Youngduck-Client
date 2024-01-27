import {useState} from 'react';
import {ScrollView, View} from 'react-native';

import SelectButton from '@/components/buttons/selectButton';
import Input from '@/components/input';
import ScreeningFilterList from './components/screeningFilterList';
import DateOption from './components/dateOption';
import {screeningListStyles} from './ScreeningList.style';
import EmptyItem from '@/components/items/emptyItem';

const ScreeningListScreen = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [category, setCategory] = useState<string>('ALL');
  const categoryOptions = [
    {label: '전체', value: 'ALL'},
    {label: '졸업상영', value: 'ASSIGNMENT'},
    {label: '과제상영', value: 'CASUAL'},
    {label: '정기상영', value: 'SPECIAL'},
    {label: '기타', value: 'ETC'},
  ];
  const [date, setDate] = useState<'createdAt' | 'startDate'>('createdAt');
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
        <View style={screeningListStyles.dateContainer}>
          <DateOption value={date} setValue={setDate} />
        </View>
      )}

      {/*<View style={{flex: 1}}>
        <EmptyItem size="large" text="검색 결과가 나오지 않아요." />
      </View>*/}
      <ScreeningFilterList />
    </View>
  );
};
export default ScreeningListScreen;
