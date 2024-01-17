import {View, TextInput} from 'react-native';
import Typography from '../../typography';
import palette from '@/styles/theme/color';

interface ITextAreaProps {
  value: string;
  onChange: (value: string) => void;
  title: string;
  maxLength: number;
  placeholder: string;
  height: number;
}
const TextArea = ({
  value,
  onChange,
  title,
  maxLength,
  placeholder,
  height,
}: ITextAreaProps) => {
  return (
    <View>
      <Typography color={palette.Text.Strong} style="Label2">
        {title}
      </Typography>
      <TextInput
        style={{height: height}}
        value={value}
        placeholder="이름을 입력해주세요."
        multiline={true}
        placeholderTextColor={palette.Text.Assistive}
      />
      {/*textAlignVertical="top" */}
    </View>
  );
};
export default TextArea;
