import {Image, View} from 'react-native';

import {defaultImages} from '@/assets';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {emptyCardStyles} from './EmptyCard.style';

interface IEmptyCardProp {
  text: string;
}
const EmptyCard = ({text}: IEmptyCardProp) => {
  return (
    <View style={emptyCardStyles.container}>
      <Image source={defaultImages.emptyCard} />
      <Typography style="Label2" color={palette.Text.Assistive}>
        {text}
      </Typography>
    </View>
  );
};
export default EmptyCard;
