import {View} from 'react-native';

import Call from '@/assets/icons/call.svg';
import Mail from '@/assets/icons/mail.svg';
import palette from '@/styles/theme/color';
import Typography from '@/components/typography';

import {infoPhoneStyles} from './DetailContact.style';

interface IDetailInfoPhoneProps {
  type: 'call' | 'mail';
  content: string;
}

const DetailContact = ({type, content}: IDetailInfoPhoneProps) => {
  return (
    <View style={infoPhoneStyles.content}>
      {type === 'call' && <Call />}
      {type === 'mail' && <Mail />}
      <Typography style="Body2" color={palette.Text.Normal} ml={8}>
        {content}
      </Typography>
    </View>
  );
};
export default DetailContact;
