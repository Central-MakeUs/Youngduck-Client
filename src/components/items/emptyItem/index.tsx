import {defaultImages} from '@/assets';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Image, View} from 'react-native';
import {emptyItemStyles} from './EmptyItem.style';

interface IEmptyItemProp {
  text: string;
}
const EmptyItem = ({text}: IEmptyItemProp) => {
  return (
    <View style={emptyItemStyles.container}>
      <Image source={defaultImages.emptyPopcorn} />
      <Typography style="Label2" color={palette.Text.Alternative} mt={16}>
        {text}
      </Typography>
    </View>
  );
};
export default EmptyItem;
