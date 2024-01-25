import {View} from 'react-native';

import BottomButton from '@/components/bottomButton';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import BlackTicket from '@/assets/icons/black-ticket.svg';
import WhiteTicket from '@/assets/icons/white-ticket.svg';

import {bottomButtonStyles} from './BottomDetailButton.style';

interface IBottomDetailButtonProps {
  type: 'default' | 'finish';
  onPress: () => void;
}

const BottomDetailButton = ({type, onPress}: IBottomDetailButtonProps) => {
  return (
    <BottomButton onPress={onPress} disabled={type === 'finish'}>
      <View style={bottomButtonStyles.content}>
        <Typography
          style="Label1"
          color={
            type === 'default' ? palette.Text.Normal : palette.Another.White
          }
          mr={8}>
          {type === 'default' ? '관람신청' : '상영종료'}
        </Typography>
        {type === 'default' ? <BlackTicket /> : <WhiteTicket />}
      </View>
    </BottomButton>
  );
};

export default BottomDetailButton;
