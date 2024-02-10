import SvgIcons from '@/assets/svgIcons';
import {CommonMarginVerticalProps} from '@/types/ui';
import {Text, TouchableOpacity, View} from 'react-native';
import {backTitleStyles} from './BackTitleTopBar.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import typography from '@/styles/theme/typography';

interface BackTitleTopBarProps extends CommonMarginVerticalProps {
  goBack: () => void;
  text: string;
  opacity: number;
}
const BackTitleTopBar = ({
  text,
  goBack,
  opacity,
  mb,
  mt,
}: BackTitleTopBarProps) => {
  const {top} = useSafeAreaInsets();
  const style = backTitleStyles({top, opacity});
  const textOpacity = Math.floor(opacity * 255);
  const fontColor = `rgba(${textOpacity},${textOpacity},${textOpacity},1)`;
  return (
    <View
      style={{
        ...style.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
        <SvgIcons.BackArrowIcon fill={fontColor} />
      </TouchableOpacity>
      <Text
        style={{
          color: fontColor,
          marginLeft: 8,
          ...typography.Subtitle2,
        }}>
        {text}
      </Text>
    </View>
  );
};
export default BackTitleTopBar;
