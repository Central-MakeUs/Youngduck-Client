// react-native-config.d.ts
declare module 'react-native-config' {
  export interface NativeConfig {
    API_KEY: any;
    KAKAO_NATIVE_APP_KEY_WITH_KAKAO: string;
    APP_KEY_WITH_KAKAO: string;
    BASE_URL: string;
    MARKETING_POLICY_URI: string;
    USAGE_POLICY_URI: string;
    PRIVACY_POLICY_URI: string;
    KMDB_API_BASE_URL: string;
    KMDB_API_KEY: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
