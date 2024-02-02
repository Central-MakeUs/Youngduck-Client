import {View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import GrayPopcorn from '@/assets/icons/gray-popcorn.svg';
import SmallGrayPopcorn from '@/assets/icons/small-gray-popcorn.svg';

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
        ...(size === 'small' ? {paddingTop: 16, paddingBottom: 24} : {flex: 1}),
      }}>
      {size === 'small' ? <SmallGrayPopcorn /> : <GrayPopcorn />}

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
