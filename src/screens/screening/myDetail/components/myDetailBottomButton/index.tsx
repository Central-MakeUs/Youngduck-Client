import BottomOptionButton from '@/components/bottomButton/bottomOptionButton';

interface IMyDetailButtonProps {
  type: 'myOpen' | 'myClose';
  onPress: () => void;
  optionPress: () => void;
}
const MyDetailBottomButton = ({
  type,
  onPress,
  optionPress,
}: IMyDetailButtonProps) => {
  return (
    <BottomOptionButton
      onPress={onPress}
      text={type === 'myOpen' ? '공개하기' : '비공개하기'}
      optionType="write"
      optionSelected={false}
      optionPress={optionPress}
      iconType={type}
      variant={type === 'myOpen' ? 'primary' : 'default'}
    />
  );
};
export default MyDetailBottomButton;
