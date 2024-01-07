import {KeyofText} from '@/styles/texts';
import {KeyOfText} from '@/types/color';
import checkTypographyStyle from '@/utils/checkTypographyStyle';
import {Text} from 'react-native';

interface ITypography {
  style: KeyofText;
  children: string;
  color?: KeyOfText;
}

function Typography({style, children, color}: ITypography) {
  const styleType = checkTypographyStyle(style);

  return <Text style={{...styleType, color}}>{children}</Text>;
}

export default Typography;
