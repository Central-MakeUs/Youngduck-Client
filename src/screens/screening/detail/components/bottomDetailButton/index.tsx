import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import BottomButton from '@/components/bottomButton/bottomBoxButton';
import Typography from '@/components/typography';
import BottomOptionButton from '@/components/bottomButton/bottomOptionButton';
import palette from '@/styles/theme/color';
import BlackTicket from '@/assets/icons/black-ticket.svg';
import WhiteTicket from '@/assets/icons/white-ticket.svg';
import {DetailBottomButtonType} from '@/types/ui';

import {
  bottomButtonStyles,
  bottomDetailTypesStyles,
} from './BottomDetailButton.style';

interface IBottomDetailButtonProps {
  onPress: () => void;
  type: DetailBottomButtonType;
  onOptionPress?: () => void;
}

const BottomDetailButton = ({
  type,
  onPress,
  onOptionPress,
}: IBottomDetailButtonProps) => {
  const {bottom} = useSafeAreaInsets();

  const style = bottomButtonStyles({bottom});
  return (
    <View style={style.container}>
      {type === 'default' || type === 'finish' ? (
        <BottomButton onPress={onPress} disabled={type === 'finish'}>
          <View style={style.content}>
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
      ) : (
        <BottomOptionButton
          onPress={onPress}
          disabled={bottomDetailTypesStyles[type].disabled}
          variant={bottomDetailTypesStyles[type].boxButtonType}
          text={bottomDetailTypesStyles[type].text}
          iconType={type}
          optionPress={onOptionPress}
          optionSelected={true}
          textColor={bottomDetailTypesStyles[type].color}
          optionDisabled={bottomDetailTypesStyles[type].optionDisabled}
          optionType="heart"
        />
      )}
    </View>
  );
};

export default BottomDetailButton;
