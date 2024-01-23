import {View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import BlackTicket from '@/assets/icons/black-ticket.svg';
import WhiteTicket from '@/assets/icons/white-ticket.svg';
import OptionButton from '@/components/buttons/optionButton';
import BoxButton from '@/components/buttons/boxButton';
import {bottomButtonStyles} from './BottomDetailButton.style';
import SvgIcons from '@/assets/svgIcons';

interface IBottomButtonProps {
  onPress: () => void;
  type?: 'default' | 'complete' | 'finish' | 'reviewStart' | 'reviewComplete';
  onOptionPress?: () => void;
}

const BottomDetailButton = ({
  onPress,
  onOptionPress,
  type = 'default',
}: IBottomButtonProps) => {
  return (
    <View style={bottomButtonStyles.container}>
      {type === 'complete' && (
        <>
          <View style={bottomButtonStyles.left}>
            <BoxButton onPress={onPress} disabled={true}>
              <View style={bottomButtonStyles.content}>
                <Typography style="Label1" color={palette.Another.White} mr={8}>
                  신청완료
                </Typography>
                <WhiteTicket />
              </View>
            </BoxButton>
          </View>
          <View style={bottomButtonStyles.right}>
            <OptionButton
              type="heart"
              isSelected={true}
              onPress={onOptionPress}
            />
          </View>
        </>
      )}
      {type === 'reviewStart' && (
        <>
          <View style={bottomButtonStyles.left}>
            <BoxButton onPress={onPress}>
              <View style={bottomButtonStyles.content}>
                <Typography style="Label1" color={palette.Text.Normal} mr={8}>
                  리뷰수정
                </Typography>
                <SvgIcons.Pencil fill={palette.Text.Normal} />
              </View>
            </BoxButton>
          </View>
          <View style={bottomButtonStyles.right}>
            <OptionButton type="heart" isSelected={true} disabled />
          </View>
        </>
      )}
      {type === 'reviewComplete' && (
        <>
          <View style={bottomButtonStyles.left}>
            <BoxButton onPress={onPress} disabled>
              <View style={bottomButtonStyles.content}>
                <Typography style="Label1" color={palette.Another.White} mr={8}>
                  리뷰완료
                </Typography>
                <SvgIcons.Pencil fill={palette.Another.White} />
              </View>
            </BoxButton>
          </View>
          <View style={bottomButtonStyles.right}>
            <OptionButton type="heart" isSelected={true} disabled />
          </View>
        </>
      )}
      {type === 'default' && (
        <BoxButton onPress={onPress}>
          <View style={bottomButtonStyles.content}>
            <Typography style="Label1" color={palette.Text.Normal} mr={8}>
              관람신청
            </Typography>
            <BlackTicket />
          </View>
        </BoxButton>
      )}
      {type === 'finish' && (
        <BoxButton onPress={onPress} disabled>
          <View style={bottomButtonStyles.content}>
            <Typography style="Label1" color={palette.Another.White} mr={8}>
              상영종료
            </Typography>
            <WhiteTicket />
          </View>
        </BoxButton>
      )}
    </View>
  );
};
export default BottomDetailButton;
