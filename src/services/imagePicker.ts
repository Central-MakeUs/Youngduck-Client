import {launchImageLibrary} from 'react-native-image-picker';

export const handleImageSelect = async () => {
  try {
    return await launchImageLibrary({
      mediaType: 'photo',
    });
  } catch (error) {
    // ignore
  }
};
