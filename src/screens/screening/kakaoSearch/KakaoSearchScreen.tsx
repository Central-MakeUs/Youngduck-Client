import {View} from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import {OnCompleteParams} from '@actbase/react-daum-postcode/lib/types';
import {searchScreenStyles} from './KakaoSearchScreen.style';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {ScreenRouteProp} from '@/types/navigator';

interface IKakaoSearchScreenProps {
  route: ScreenRouteProp<'KakaoSearchScreen'>;
}

const KakaoSearchScreen = ({route: {params}}: IKakaoSearchScreenProps) => {
  const {stackNavigation} = useNavigator();

  const handleSelected = (data: OnCompleteParams) => {
    stackNavigation.navigate(stackScreens.WritingScreen, {
      type: params.type,
      search: data.address,
    });
  };

  const handleError = (e: any) => {
    console.log(e);
  };

  return (
    <View style={searchScreenStyles.container}>
      <Postcode
        style={searchScreenStyles.innerContainer}
        jsOptions={{animation: true, autoMapping: true}}
        onSelected={handleSelected}
        onError={handleError}
      />
    </View>
  );
};

export default KakaoSearchScreen;
