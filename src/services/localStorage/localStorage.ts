import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalStorageKey from './localStorageKey';

// 스토리지에 아이템을 저장
const setItem = async <T>(key: LocalStorageKey, items: T) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(items));
  } catch (error) {
    console.log('localstorage error: ', error);
    return null;
  }
};

// 스토리지에서 아이템을 가져옴
const getItemOrNull = async <T>(key: LocalStorageKey): Promise<T | null> => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  } catch (error) {
    console.log('localstorage error: ', error);
    return null;
  }
};

// refresh 토큰 스토리지에 저장
export const setRefreshToken = async (token: string) => {
  await setItem<string>(LocalStorageKey.RefreshToken, token);
};

// access 토큰 스토리지에 저장
export const setAccessToken = async (token: string) => {
  await setItem<string>(LocalStorageKey.AccessToken, token);
};

// refresh 토큰 값 꺼내기
export const getRefreshToken = async (): Promise<string | null> => {
  const refresh = await getItemOrNull<string>(LocalStorageKey.RefreshToken);
  return refresh;
};

// access 토큰 값 꺼내기
export const getAccessToken = async (): Promise<string | null> => {
  const access = await getItemOrNull<string>(LocalStorageKey.AccessToken);
  return access;
};

// 두개 동시에 저장
export const setTokens = async (refresh: string, access: string) => {
  await setRefreshToken(refresh);
  await setAccessToken(access);
};

// 로그아웃 혹은 탈퇴 토큰 제거
export const removeTokens = async () => {
  await setRefreshToken('');
  await setAccessToken('');
};

// 회원가입을 해야 할 최초 유저 여부 가져옴
export const getIsInstalled = async (): Promise<boolean> => {
  return !!(await getItemOrNull<boolean>(LocalStorageKey.IsInstalled));
};

// 최초 유저 여부 저장
export const setIsInstalled = async (value: boolean) => {
  await setItem<boolean>(LocalStorageKey.IsInstalled, value);
};
