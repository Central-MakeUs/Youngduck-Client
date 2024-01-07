import {ITypography} from '@/types/typography';
import checkTypographyStyle from '@/utils/checkTypographyStyle';
import {Text} from 'react-native';

function Typography({
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
  const styleType = checkTypographyStyle(style);
  return (
    <Text
      style={{
        ...styleType,
        color,
        marginTop: mt ? mt : undefined,
        marginRight: mr ? mr : undefined,
        marginBottom: mb ? mb : undefined,
        marginLeft: ml ? ml : undefined,
        marginHorizontal: mx ? mx : undefined,
        marginVertical: my ? my : undefined,
        margin: m ? m : undefined,
      }}>
      {children}
    </Text>
  );
}

export default Typography;
