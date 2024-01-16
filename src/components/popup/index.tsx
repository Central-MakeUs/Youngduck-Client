import {View} from 'react-native';
import Typography from '../typography';

import ModalContainer from 'react-native-modal';

import palette from '@/styles/theme/color';
import {popupStyles} from './Modal.style';
import BoxButton from '../buttons/boxButton';

interface ModalProps {
  title: string;
  content: string;
  isVisible: boolean;
  onClose: () => void;
  onPress: () => void;
}

const Popup = ({title, content, isVisible, onClose, onPress}: ModalProps) => {
  return (
    <ModalContainer isVisible={isVisible} onBackdropPress={onClose}>
      <View style={popupStyles.modal}>
        <Typography style="Subtitle2" color={palette.Text.Strong}>
          {title}
        </Typography>
        <Typography style="Body1" color={palette.Text.Normal} mt={8} mb={16}>
          {content}
        </Typography>
        <View style={popupStyles.container}>
          <BoxButton variant="default" onPress={onClose} width="50%">
            아니오
          </BoxButton>
          <BoxButton onPress={onPress} width="50%">
            예
          </BoxButton>
        </View>
      </View>
    </ModalContainer>
  );
};

export default Popup;
