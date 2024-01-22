import {View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import BlackTicket from '@/assets/icons/black-ticket.svg';
import OptionButton from '@/components/buttons/optionButton';
import BoxButton from '@/components/buttons/boxButton';
import {bottomButtonStyles} from './BottomDetailButton.style';

interface IBottomButtonProps {
  onPress: () => void;
}

const BottomDetailButton = ({onPress}: IBottomButtonProps) => {
  return (
    <View style={bottomButtonStyles.container}>
      <View style={bottomButtonStyles.left}>
        <BoxButton onPress={onPress}>
          <View style={bottomButtonStyles.content}>
            <Typography style="Label1" color={palette.Text.Normal} mr={12}>
              관람 신청
            </Typography>
            <BlackTicket />
          </View>
        </BoxButton>
      </View>
      <View style={bottomButtonStyles.right}>
        <OptionButton type="write" />
      </View>
    </View>
  );
};
export default BottomDetailButton;
