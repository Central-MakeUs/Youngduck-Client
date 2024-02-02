import {View} from 'react-native';

import EmptyCardPopcorn from '@/assets/icons/empty-card-popcorn.svg';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {emptyCardStyles} from './EmptyCard.style';

interface IEmptyCardProp {
  text: string;
}
const EmptyCard = ({text}: IEmptyCardProp) => {
  return (
    <View style={emptyCardStyles.container}>
      <EmptyCardPopcorn />
      <Typography style="Label2" color={palette.Text.Assistive}>
        {text}
      </Typography>
    </View>
  );
};
export default EmptyCard;
