import {View} from 'react-native';
import Typography from '../typography';

import ModalContainer from 'react-native-modal';

import palette from '@/styles/theme/color';
import {modalStyles} from './Modal.style';
import Button from '../button';

interface ModalProps {
  title: string;
  content: string;
  isVisible: boolean;
  onClose: () => void;
  onPress: () => void;
}

const Modal = ({title, content, isVisible, onClose, onPress}: ModalProps) => {
  return (
    <ModalContainer isVisible={isVisible} onBackdropPress={onClose}>
      <View style={modalStyles.modal}>
        <Typography style="Subtitle2" color={palette.Text.Strong}>
          {title}
        </Typography>
        <Typography style="Body1" color={palette.Text.Normal} mt={8} mb={16}>
          {content}
        </Typography>
        <View style={modalStyles.container}>
          <Button variant="default" onPress={onClose} width="50%">
            아니오
          </Button>
          <Button onPress={onPress} width="50%">
            예
          </Button>
        </View>
      </View>
    </ModalContainer>
  );
};

export default Modal;