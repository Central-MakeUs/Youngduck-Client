import {View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import BlackTicket from '@/assets/icons/black-ticket.svg';
import WhiteTicket from '@/assets/icons/white-ticket.svg';
import OptionButton from '@/components/buttons/optionButton';
import BoxButton from '@/components/buttons/boxButton';
import {
  bottomButtonStyles,
  bottomDetailTypesStyles,
} from './BottomDetailButton.style';
import SvgIcons from '@/assets/svgIcons';
import {DetailBottomButtonType} from '@/types/ui';

interface IBottomButtonProps {
  onPress: () => void;
  type?: DetailBottomButtonType;
  onOptionPress?: () => void;
  heartState?: boolean;
}

const getBottomButtonIcon = (type: DetailBottomButtonType) => {
  return (
    <>
      {type === 'default' && <BlackTicket />}
      {(type === 'finish' || type === 'complete') && <WhiteTicket />}
      {type === 'reviewStart' && <SvgIcons.Pencil fill={palette.Text.Normal} />}
      {type === 'reviewComplete' && (
        <SvgIcons.Pencil fill={palette.Another.White} />
      )}
    </>
  );
};

const BottomDetailButton = ({
  onPress,
  onOptionPress,
  type = 'default',
  heartState,
}: IBottomButtonProps) => {
  return (
    <View style={bottomButtonStyles.container}>
      {(() => {
        if (type === 'default' || type === 'finish') {
          return (
            <BoxButton onPress={onPress} disabled={type === 'finish'}>
              <View style={bottomButtonStyles.content}>
                <Typography
                  style="Label1"
                  color={
                    type === 'default'
                      ? palette.Text.Normal
                      : palette.Another.White
                  }
                  mr={8}>
                  {type === 'default' ? '관람신청' : '상영종료'}
                </Typography>
                {getBottomButtonIcon(type)}
              </View>
            </BoxButton>
          );
        }
        return (
          <>
            <View style={bottomButtonStyles.left}>
              <BoxButton
                onPress={onPress}
                disabled={bottomDetailTypesStyles[type].disabled}>
                <View style={bottomButtonStyles.content}>
                  <Typography
                    style="Label1"
                    color={bottomDetailTypesStyles[type].color}
                    mr={8}>
                    {bottomDetailTypesStyles[type].text}
                  </Typography>
                  {getBottomButtonIcon(type)}
                </View>
              </BoxButton>
            </View>
            <View style={bottomButtonStyles.right}>
              <OptionButton
                type="heart"
                isSelected={
                  bottomDetailTypesStyles[type].heartDisabled
                    ? true
                    : heartState
                }
                onPress={onOptionPress!}
                disabled={bottomDetailTypesStyles[type].heartDisabled}
              />
            </View>
          </>
        );
      })()}
    </View>
  );
};
export default BottomDetailButton;
