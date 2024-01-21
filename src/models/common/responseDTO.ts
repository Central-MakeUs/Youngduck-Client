import {AxiosError} from 'axios';

export interface ResponseAPI {
  message: string;
  status: number;
}

export interface ResponseDTO<T = object> extends ResponseAPI {
  data: T;
}

export type ResponseErrorDTO = AxiosError<ResponseDTO>;
