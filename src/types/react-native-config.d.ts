// react-native-config.d.ts
declare module 'react-native-config' {
  export interface NativeConfig {
    API_KEY: any;
    KAKAO_NATIVE_APP_KEY_WITH_KAKAO: string;
    APP_KEY_WITH_KAKAO: string;
    BASE_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
