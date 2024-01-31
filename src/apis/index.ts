import axios, {AxiosError, AxiosResponse} from 'axios';
import Config from 'react-native-config';

import {ResponseErrorAPI} from '@/models/common/responseDTO';
import {postAccessToken} from './auth/auth';
import {getAccessToken} from '@/services/localStorage/localStorage';

const baseURL = Config.BASE_URL;

// 토큰 없이 호출하는 api instance
export const apiWithoutToken = axios.create({
  baseURL,
  timeout: 10 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// 헤더에 토큰 넣어서 호출하는 api instance
export const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json',
  },
});

// api 함수 호출 전에 실행
api.interceptors.request.use(
  async config => {
    // 로컬 스토리지에서 access token을 꺼냄
    const accessToken = await getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// api 함수 호출 후 성공했을 시에 실행
const onFulfilled = (res: AxiosResponse) => res;

// api 함수 호출 후 실패했을 시에 실행
let lock = false;

const onRejected = async (error: AxiosError) => {
  const originalConfig = error.config;
  const data = error.response?.data as ResponseErrorAPI;
  console.log('토큰 만료', data);
  if (
    (originalConfig &&
      error.response?.status === 401 &&
      data?.code === 'AUTH_401_3') ||
    (error.response?.status === 500 && data.code === 'GLOBAL_500_1' && !lock)
  ) {
    lock = true;
    try {
      await postAccessToken();
      return apiWithoutToken
        .request({
          ...originalConfig,
          headers: {
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        })
        .finally(() => (lock = false));
    } catch (error) {
      console.log('axios interceptor error: ', error);
    }
  }
  return Promise.reject(error);
};
api.interceptors.response.use(onFulfilled, onRejected);
