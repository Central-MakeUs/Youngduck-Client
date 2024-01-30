import {View} from 'react-native';
import ModalContainer from 'react-native-modal';

import Typography from '../typography';
import BoxButton from '../buttons/boxButton';
import palette from '@/styles/theme/color';

import {popupStyles} from './Popup.style';

interface ModalProps {
  title: string;
  content: string;
  isVisible: boolean;
  onClose: () => void;
  onPress: () => void;
  type?: 'error' | 'default';
}

const Popup = ({
  title,
  content,
  isVisible,
  onClose,
  onPress,
  type,
}: ModalProps) => {
  return (
    <ModalContainer isVisible={isVisible} onBackdropPress={onClose}>
      <View
        style={{
          ...popupStyles.modal,
          borderColor:
            type === 'error' ? palette.State.Point : palette.Primary.Normal,
        }}>
        <Typography style="Subtitle2" color={palette.Text.Strong}>
          {title}
        </Typography>
        <Typography style="Body1" mt={8} mb={16}>
          {content}
        </Typography>
        <View style={popupStyles.container}>
          <BoxButton variant="default" onPress={onClose} width="50%">
            아니오
          </BoxButton>
          <BoxButton
            onPress={onPress}
            variant={type === 'error' ? 'highlight' : 'primary'}
            width="50%">
            네
          </BoxButton>
        </View>
      </View>
    </ModalContainer>
  );
};

export default Popup;
