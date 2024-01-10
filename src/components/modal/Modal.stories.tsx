import {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import Modal from '.';

const ModalTest = () => {
  const [modal, setModal] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleOnPress = () => {
    console.log('예 버튼 클릭');
    handleCloseModal();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={handleOpenModal}
        style={{backgroundColor: 'blue', padding: 20}}>
        <Text style={{color: 'white'}}>modal 열기</Text>
      </TouchableOpacity>

      <Modal
        title="모달 메시지"
        content="서브 메시지"
        isVisible={modal}
        onClose={handleCloseModal}
        onPress={handleOnPress}
      />
    </View>
  );
};

storiesOf('components/Modal', module).add('with Button', () => <ModalTest />);
