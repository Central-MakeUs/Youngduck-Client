import {View} from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import {OnCompleteParams} from '@actbase/react-daum-postcode/lib/types';
import {searchScreenStyles} from './KakaoSearchScreen.style';
import useNavigator from '@/hooks/useNavigator';
import useLocationStore from '@/stores/location';

const KakaoSearchScreen = () => {
  const {stackNavigation} = useNavigator();
  const {setLocation} = useLocationStore();
  const handleSelected = (data: OnCompleteParams) => {
    //console.log('주소 데이터', data.address);
    setLocation(data.address);
    stackNavigation.goBack();
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
