import {Linking, Platform} from 'react-native';
import InAppBrowser, {
  InAppBrowserAndroidOptions,
  InAppBrowserOptions,
  InAppBrowseriOSOptions,
} from 'react-native-inappbrowser-reborn';

/**
 * OS에 따른 InAppBrowserOptions을 가져옵니다.
 */
const getInAppBrowserOptions = () => {
  return Platform.select<InAppBrowserOptions>({
    ios: {
      dismissButtonStyle: 'close',
      animated: true,
      enableBarCollapsing: false,
    } as InAppBrowseriOSOptions,
    android: {
      showTitle: false,
      enableUrlBarHiding: true,
      enableDefaultShare: true,
    } as InAppBrowserAndroidOptions,
  });
};

/**
 * 인앱 브라우저를 엽니다.
 */
export const openInappBrowser = async (url: string) => {
  try {
    if (!url) {
      return;
    }

    const isAvailable = await InAppBrowser.isAvailable();

    if (isAvailable) {
      InAppBrowser.open(url, getInAppBrowserOptions());
      return;
    }

    throw new Error('can not open inapp browser');
  } catch (error) {
    try {
      Linking.openURL(url);
    } catch (error) {
      return;
    }
  }
};
