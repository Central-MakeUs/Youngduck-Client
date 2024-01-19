import {View} from 'react-native';
import {detailBottomButtonStyles} from './DetailBottomButton.style';
import BoxButton from '../../buttons/boxButton';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import BlackTicket from '@/assets/icons/black-ticket.svg';
import HeartButton from '@/components/buttons/heartButton';
import SvgIcons from '@/assets/svgIcons';

interface IDetailBottomButtonProps {
  onPress: () => void;
}

const DetailBottomButton = ({onPress}: IDetailBottomButtonProps) => {
  return (
    <View style={detailBottomButtonStyles.container}>
      <View style={detailBottomButtonStyles.left}>
        <BoxButton onPress={onPress}>
          <View style={detailBottomButtonStyles.content}>
            <Typography style="Label1" color={palette.Text.Normal} mr={12}>
              신청 완료
            </Typography>
            <BlackTicket />
          </View>
        </BoxButton>
      </View>
      <View style={detailBottomButtonStyles.right}>
        <HeartButton isSelected={false} disabled={true} onPress={() => {}} />
      </View>
    </View>
  );
};
export default DetailBottomButton;
