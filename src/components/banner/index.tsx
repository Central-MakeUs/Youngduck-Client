import {Image, View} from 'react-native';
import Typography from '../typography';
import RoundButton from '../buttons/roundButton';
import {bannerContentStyles, bannerStyles} from './Banner.style';
import {BannerType} from '@/types/ui';
import palette from '@/styles/theme/color';

interface BannerProp {
  type: BannerType;
  onPress: () => void;
}
const Banner = ({type, onPress}: BannerProp) => {
  return (
    <View>
      <Image
        source={bannerContentStyles[type].source}
        style={bannerStyles.image}
      />
      <View style={bannerStyles.container}>
        <Typography style="Subtitle1" color={palette.Primary.Dark}>
          {bannerContentStyles[type].title}
        </Typography>
        <Typography style="Chips1" mt={24} mb={4} color={palette.Primary.Dark}>
          {bannerContentStyles[type].content}
        </Typography>
        <RoundButton onPress={onPress}>
          {bannerContentStyles[type].button}
        </RoundButton>
      </View>
    </View>
  );
};
export default Banner;
