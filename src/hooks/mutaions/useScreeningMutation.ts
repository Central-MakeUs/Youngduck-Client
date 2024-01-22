import {postImageUpload} from '@/apis/image/image';
import {useMutation} from '@tanstack/react-query';

const useScreeningMutation = () => {
  const uploadImage = useMutation({
    mutationFn: postImageUpload,
  });

  return {uploadImage};
};
export default useScreeningMutation;
