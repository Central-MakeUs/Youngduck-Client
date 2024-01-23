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
  heartState?: boolean;
}

interface IBottomDetail {
  text: string;
  color: string;
  disabled: boolean;
  icon: React.ReactNode;
  heartDisabled: boolean;
}

const bottomDetailTypesStyles: Record<
  'complete' | 'reviewStart' | 'reviewComplete',
  IBottomDetail
> = {
  complete: {
    text: '신청완료',
    color: palette.Another.White,
    disabled: true,
    icon: <WhiteTicket />,
    heartDisabled: false,
  },
  reviewStart: {
    text: '리뷰하기',
    color: palette.Text.Normal,
    disabled: false,
    icon: <SvgIcons.Pencil fill={palette.Text.Normal} />,
    heartDisabled: true,
  },
  reviewComplete: {
    text: '리뷰완료',
    color: palette.Another.White,
    disabled: true,
    icon: <SvgIcons.Pencil fill={palette.Another.White} />,
    heartDisabled: true,
  },
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
                {type === 'default' ? <BlackTicket /> : <WhiteTicket />}
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
                  {bottomDetailTypesStyles[type].icon}
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
