// 로그인 응답 타입
export interface ILoginResponse {
  canLogin: boolean;
  idToken: string;
  accessToken: string;
  accessTokenAge: number;
  refreshToken: string;
  refreshTokenAge: number;
}

// 회원가입 응답 타입
export interface IRegisterResponse {
  accessToken: string;
  accessTokenAge: number;
  refreshToken: string;
  refreshTokenAge: number;
}
