import {Text, View} from 'react-native';
import ModalContainer from 'react-native-modal';

import Typography from '../typography';
import BoxButton from '../buttons/boxButton';
import palette from '@/styles/theme/color';

import {popupStyles} from './Popup.style';
import text from '@/styles/theme/typography';

interface ModalProps {
  title: string;
  content?: string;
  isVisible: boolean;
  onClose: () => void;
  onPress: () => void;
  type?: 'error' | 'default';
  leftText?: string;
  rigthText?: string;
}

const Popup = ({
  title,
  content,
  isVisible,
  onClose,
  onPress,
  type,
  leftText = '아니요',
  rigthText = '네',
}: ModalProps) => {
  return (
    <ModalContainer
      style={popupStyles.wrapper}
      isVisible={isVisible}
      onBackdropPress={onClose}>
      <View
        style={{
          ...popupStyles.modal,
          borderColor:
            type === 'error' ? palette.State.Point : palette.Primary.Normal,
        }}>
        <Typography style="Subtitle2" color={palette.Text.Strong}>
          {title}
        </Typography>
        {content && (
          <Text style={[text['Body1'], {textAlign: 'center'}]}>{content}</Text>
        )}

        <View style={popupStyles.container}>
          <BoxButton variant="default" onPress={onClose} width="35%">
            {leftText}
          </BoxButton>
          <BoxButton
            onPress={onPress}
            variant={type === 'error' ? 'highlight' : 'primary'}
            width="35%">
            {rigthText}
          </BoxButton>
        </View>
      </View>
    </ModalContainer>
  );
};

export default Popup;
