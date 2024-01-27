import {Image, View} from 'react-native';

import {defaultImages} from '@/assets';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {emptyItemStyles} from './EmptyItem.style';

interface IEmptyItemProp {
  text: string;
  size?: 'small' | 'large';
}
const EmptyItem = ({text, size = 'small'}: IEmptyItemProp) => {
  return (
    <View
      style={{
        ...emptyItemStyles.container,
        ...(size === 'small' ? {paddingTop: 16, paddingBottom: 15} : {flex: 1}),
      }}>
      {size === 'small' && <Image source={defaultImages.emptyPopcorn} />}
      {size === 'large' && <Image source={defaultImages.emptyList} />}
      <Typography
        style={size === 'small' ? 'Label2' : 'Label1'}
        color={palette.Text.Alternative}
        mt={16}>
        {text}
      </Typography>
    </View>
  );
};
export default EmptyItem;
