// react-native-config.d.ts
declare module 'react-native-config' {
  export interface NativeConfig {
    API_KEY: any;
    TEST: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
