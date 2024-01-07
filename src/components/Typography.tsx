import {KeyofText} from '@/styles/texts';
import checkTypographyStyle from '@/utils/checkTypographyStyle';
import {Text} from 'react-native';

interface ITypography {
  style: KeyofText;
  children: string;
}

function Typography({style, children}: ITypography) {
  const styleType = checkTypographyStyle(style);

  return <Text style={styleType}>{children}</Text>;
}

export default Typography;
