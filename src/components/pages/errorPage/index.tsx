import {SafeAreaView, TouchableOpacity} from 'react-native';
import ErrorPopcornSvg from '@/assets/icons/error-popcorn.svg';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import errorPageStyles from './ErrorPage.style';

interface IErrorPageProp {
  resetError: () => void;
}

const ErrorPage = ({resetError}: IErrorPageProp) => {
  return (
    <SafeAreaView style={errorPageStyles.container}>
      <ErrorPopcornSvg />
      <Typography style="Label2" color={palette.Text.Assistive} mt={16}>
        페이지를 불러올 수 없었어요
      </Typography>
      <Typography style="Label2" color={palette.Text.Assistive} mb={8}>
        다시 시도해 보세요
      </Typography>
      <TouchableOpacity
        activeOpacity={0.8}
        style={errorPageStyles.button}
        onPress={resetError}>
        <Typography style="Label1" color={palette.Text.Alternative}>
          다시 시도하기
        </Typography>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ErrorPage;
