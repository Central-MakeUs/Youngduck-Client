import {View, Pressable} from 'react-native';
import {useEffect, useRef} from 'react';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';

import useFocus from '@/hooks/useFocus';
import palette from '@/styles/theme/color';
import Location from '@/assets/icons/location.svg';
import Search from '@/assets/icons/search.svg';
import Typography from '@/components/typography';
import SearchBottomSheet from '@/screens/popCornParty/writeRecommand/components/searchBottomSheet';

import {inputStyles, inputTypes} from '@/styles/Input.style';

interface TypeInputProps {
  value?: any;
  placeholder: string;
  title: string;
  essential?: boolean;
  category: 'location' | 'search';
  setValue: (value: any) => void;

  onPress?: () => void;
}

const ButtonInput = ({
  value, // 통신할  시간 value 값
  placeholder,
  title,
  essential,
  category,
  setValue,
  onPress,
}: TypeInputProps) => {
  const {type, onFocus, onBlur} = useFocus();

  useEffect(() => {
    onBlur(value);
  }, [value]);

  // 필요한 모달 열기
  const showModal = () => {
    if (category === 'search' && bottomDrawerRef) {
      bottomDrawerRef.current?.open();
    }
  };

  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  return (
    <View>
      <Typography
        essential={essential}
        style="Label2"
        mb={4}
        color={inputTypes[type].titleColor}>
        {title}
      </Typography>
      <Pressable
        style={[
          inputStyles.buntton,
          {borderColor: inputTypes[type].borderColor},
        ]}
        onPress={onPress ? onPress : showModal}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(value)}>
        <Typography
          style="Body1"
          color={value ? palette.Text.Normal : palette.Text.Assistive}>
          {value ? value : placeholder}
        </Typography>
        {category === 'location' && <Location />}
        {category === 'search' && <Search />}
      </Pressable>
      {/* 추천 영화 Bottom Sheet 컴포넌트 */}
      {category === 'search' && (
        <SearchBottomSheet
          setValue={setValue}
          bottomDrawerRef={bottomDrawerRef}
        />
      )}
    </View>
  );
};
export default ButtonInput;
