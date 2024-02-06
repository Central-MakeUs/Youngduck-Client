import {api} from '@/apis';
import {IFcmAlarmRequest} from '@/models/fcm/request/fcmAlarmRequestDto';

export const postFcmAlarm = async (body: IFcmAlarmRequest) => {
  const res = await api.post(`/fcm/${body.userId}`, {
    fcm_token: body.fcmToken,
  });
  return res.data;
};
