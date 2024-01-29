import palette from '@/styles/theme/color';
import text from '@/styles/theme/typography';
import {ITypography} from '@/types/theme/typography';
import {Text} from 'react-native';

function Typography({
  style,
  children,
  color = palette.Text.Normal,
  essential,
  numberOfLines = 3,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
}: ITypography) {
  return (
    <Text
      style={{
        color,
        marginTop: mt ? mt : undefined,
        marginRight: mr ? mr : undefined,
        marginBottom: mb ? mb : undefined,
        marginLeft: ml ? ml : undefined,
        marginHorizontal: mx ? mx : undefined,
        marginVertical: my ? my : undefined,
        margin: m ? m : undefined,
        fontFamily: 'Pretendard Variable',
        ...text[style],
      }}
      numberOfLines={numberOfLines === -1 ? undefined : numberOfLines}>
      {children}
      {essential && <Text style={{color: palette.State.Point}}>*</Text>}
    </Text>
  );
}

export default Typography;
