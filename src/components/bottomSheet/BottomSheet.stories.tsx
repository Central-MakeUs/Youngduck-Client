import {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';
import BottomSheet from '.';

const BottomSheetTest = () => {
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  const handleBottomSheet = () => {
    if (bottomDrawerRef.current) {
      bottomDrawerRef.current?.open();
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={handleBottomSheet}
        style={{backgroundColor: 'blue', padding: 20}}>
        <Text style={{color: 'white'}}>bottomsheet열기</Text>
      </TouchableOpacity>

      <BottomSheet drawerRef={bottomDrawerRef} height={400}>
        <View style={{padding: 16}}>
          <Text>컨텐츠 넣어주기</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

storiesOf('components/BottomSheet', module).add('with Button', () => (
  <BottomSheetTest />
));
