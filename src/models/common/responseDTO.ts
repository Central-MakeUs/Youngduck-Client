export interface ResponseAPI {
  message: string;
  status: number;
}

export interface ResponseDTO<T = object> extends ResponseAPI {
  data: T;
}

export interface ResponseErrorAPI {
  timestamp: string;
  success: boolean;
  code: string;
  status: number;
  reason: string;
}
