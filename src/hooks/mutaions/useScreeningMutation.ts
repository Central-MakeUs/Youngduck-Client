import {postImageUpload} from '@/apis/image/image';
import {postScreening} from '@/apis/screening/screening';
import {useMutation} from '@tanstack/react-query';
import useNavigator from '../useNavigator';

const useScreeningMutation = () => {
  const {stackNavigation} = useNavigator();
  const uploadImage = useMutation({
    mutationFn: postImageUpload,
  });

  const uploadScreening = useMutation({
    mutationFn: postScreening,
    onSuccess: data => {
      stackNavigation.navigate('DetailScreen', {id: data.data.id});
    },
  });

  return {uploadImage, uploadScreening};
};
export default useScreeningMutation;
