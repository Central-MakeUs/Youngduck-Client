import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export const setupAlarm = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  PushNotification.configure({
    // 푸쉬 알람 등록 시 기기 토큰 제공 => 토큰을 서버로 제공
    onRegister: function (token: any) {
      console.log('TOKEN:', token);
    },
    // 알림 도착해서 클릭 시 실행
    onNotification: function (notification: any) {
      console.log('NOTIFICATION:', notification);
      // ios 설정
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    // notification에 action 등록이 가능
    // 등록한 액션을 누렀고 invokeApp이 false 상태일 때 실행
    onAction: function (notification: any) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },
    // 에러 발생했을 시
    onRegistrationError: function (err: Error) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    // 권한 요청
    requestPermissions: true,
  });
};
