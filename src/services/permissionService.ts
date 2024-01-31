import {Permissions} from '@/models/enums/permission';
import {Platform} from 'react-native';
import {
  PERMISSIONS,
  Permission,
  RESULTS,
  check,
  request,
} from 'react-native-permissions';

export const checkAndRequestPermission = async (type: Permissions) => {
  const key = permissionFactory(type);

  if (!key) {
    return 'denied';
  }

  const checkResult = await check(key);

  if (checkResult === RESULTS.DENIED) {
    return await request(key);
  }

  return checkResult;
};

// 권한을 처리하는 타입에 알맞은 키 값을 반환하는 함수
const permissionFactory = (type: string) => {
  switch (type) {
    case Permissions.PhotoLibrary:
      return getPhotoLibraryPermissionKey();
    case Permissions.Alarm:
      return getAlarmPermissionKey();
    default:
      return null;
  }
};

// 기기 플랫폼에 따라서 갤러리 접근 권한 키를 반환하는 함수
const getPhotoLibraryPermissionKey = (): Permission | null => {
  return Platform.select({
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    android: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    default: null,
  });
};

const getAlarmPermissionKey = () => {};
