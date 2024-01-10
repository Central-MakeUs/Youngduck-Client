import text from '@/styles/texts';
import {ITypography} from '@/types/typography';
import {Text} from 'react-native';

function Typography({
  typography,
  style,
  children,
  color,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
}: ITypography) {
  const selectedTypography = typography ? text[typography] : {};
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
        ...selectedTypography,
        ...style,
      }}>
      {children}
    </Text>
  );
}

export default Typography;
