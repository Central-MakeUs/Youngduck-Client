import {View} from 'react-native';

import BottomButton from '@/components/bottomButton';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import BlackTicket from '@/assets/icons/black-ticket.svg';
import WhiteTicket from '@/assets/icons/white-ticket.svg';
import CloseEye from '@/assets/icons/close-eye.svg';
import OpenEye from '@/assets/icons/open-eye.svg';
import {DetailBottomButtonType} from '@/types/ui';
import BoxButton from '@/components/buttons/boxButton';
import SvgIcons from '@/assets/svgIcons';
import OptionButton from '@/components/buttons/optionButton';

import {
  bottomButtonStyles,
  bottomDetailTypesStyles,
} from './BottomDetailButton.style';

interface IBottomDetailButtonProps {
  onPress: () => void;
  type: DetailBottomButtonType;
  onOptionPress?: () => void;
  heartState?: boolean;
}

const getBottomButtonIcon = (type: DetailBottomButtonType) => {
  return (
    <>
      {(type === 'complete' || type === 'finish') && <WhiteTicket />}
      {type === 'reviewStart' && <SvgIcons.Pencil fill={palette.Text.Normal} />}
      {type === 'reviewComplete' && (
        <SvgIcons.Pencil fill={palette.Another.White} />
      )}
      {type === 'default' && <BlackTicket />}
      {type === 'myOpen' && <OpenEye />}
      {type === 'myClose' && <CloseEye />}
    </>
  );
};

const BottomDetailButton = ({
  type,
  onPress,
  onOptionPress,
  heartState,
}: IBottomDetailButtonProps) => {
  return (
    <>
      {type === 'default' || type === 'finish' ? (
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
            {getBottomButtonIcon(type)}
          </View>
        </BottomButton>
      ) : (
        <View style={bottomButtonStyles.container}>
          <View style={bottomButtonStyles.left}>
            <BoxButton
              onPress={onPress}
              variant={bottomDetailTypesStyles[type].boxButtonType}
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
              type={bottomDetailTypesStyles[type].option}
              isSelected={
                bottomDetailTypesStyles[type].optionDisabled
                  ? true
                  : type === 'complete'
                  ? heartState
                  : false
              }
              onPress={onOptionPress!}
              disabled={bottomDetailTypesStyles[type].optionDisabled}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default BottomDetailButton;
