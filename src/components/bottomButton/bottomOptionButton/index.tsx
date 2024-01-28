import {View} from 'react-native';

import BoxButton from '@/components/buttons/boxButton';
import OptionButton from '@/components/buttons/optionButton';
import Typography from '@/components/typography';
import {
  DetailAllBottomButtonType,
  IVariant,
  OptionButtonType,
} from '@/types/ui';
import WhiteTicket from '@/assets/icons/white-ticket.svg';
import CloseEye from '@/assets/icons/close-eye.svg';
import OpenEye from '@/assets/icons/open-eye.svg';
import SvgIcons from '@/assets/svgIcons';
import palette from '@/styles/theme/color';

import {bottomOptionButtonStyles} from './BottomOptionButton.style';

interface IBottomOptionButton {
  onPress?: () => void;
  disabled?: boolean;
  variant?: IVariant;
  textColor?: string;
  text: string;
  optionType: OptionButtonType;
  optionSelected: boolean;
  optionPress?: () => void;
  optionDisabled?: boolean;
  iconType: DetailAllBottomButtonType;
}

const getBottomButtonIcon = (type: DetailAllBottomButtonType) => {
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

const BottomOptionButton = ({
  onPress,
  disabled = false,
  variant = 'default',
  textColor = palette.Text.Normal,
  text,
  optionType,
  optionSelected,
  optionPress,
  optionDisabled = false,
  iconType,
}: IBottomOptionButton) => {
  return (
    <View style={bottomOptionButtonStyles.container}>
      <View style={bottomOptionButtonStyles.left}>
        <BoxButton onPress={onPress!} variant={variant} disabled={disabled}>
          <View style={bottomOptionButtonStyles.content}>
            <Typography style="Label1" color={textColor} mr={8}>
              {text}
            </Typography>
            {getBottomButtonIcon(iconType)}
          </View>
        </BoxButton>
      </View>
      <View style={bottomOptionButtonStyles.right}>
        <OptionButton
          type={optionType}
          isSelected={optionSelected}
          onPress={optionPress!}
          disabled={optionDisabled}
        />
      </View>
    </View>
  );
};
export default BottomOptionButton;
