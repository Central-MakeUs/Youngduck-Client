import {View, StyleSheet} from 'react-native';
import Typography from '../typography';
import palette from '@/styles/colors';
import ModalContainer from 'react-native-modal';
import {Button} from '../button';

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
      <View style={styles.modal}>
        <Typography style="Subtitle2" color={palette.Text.Strong}>
          {title}
        </Typography>
        <Typography style="Body1" color={palette.Text.Normal} mt={8} mb={16}>
          {content}
        </Typography>
        <View style={styles.container}>
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

const styles = StyleSheet.create({
  modal: {
    backgroundColor: palette.Another.White,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: palette.Primary.Normal,
    paddingTop: 24,
    paddingBottom: 16,
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 32,
  },
});
