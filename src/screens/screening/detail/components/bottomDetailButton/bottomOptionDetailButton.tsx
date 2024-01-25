import {View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import WhiteTicket from '@/assets/icons/white-ticket.svg';
import CloseEye from '@/assets/icons/close-eye.svg';
import OpenEye from '@/assets/icons/open-eye.svg';
import OptionButton from '@/components/buttons/optionButton';
import BoxButton from '@/components/buttons/boxButton';
import SvgIcons from '@/assets/svgIcons';
import {DetailOptionBottomButtonType} from '@/types/ui';

import {
  bottomButtonStyles,
  bottomDetailTypesStyles,
} from './BottomDetailButton.style';

interface IBottomButtonProps {
  onPress: () => void;
  type: DetailOptionBottomButtonType;
  onOptionPress?: () => void;
  heartState?: boolean;
}

const getBottomButtonIcon = (type: DetailOptionBottomButtonType) => {
  return (
    <>
      {type === 'complete' && <WhiteTicket />}
      {type === 'reviewStart' && <SvgIcons.Pencil fill={palette.Text.Normal} />}
      {type === 'reviewComplete' && (
        <SvgIcons.Pencil fill={palette.Another.White} />
      )}
      {type === 'myOpen' && <OpenEye />}
      {type === 'myClose' && <CloseEye />}
    </>
  );
};

const BottomOptionDetailButton = ({
  onPress,
  onOptionPress,
  type,
  heartState,
}: IBottomButtonProps) => {
  return (
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
  );
};
export default BottomOptionDetailButton;
