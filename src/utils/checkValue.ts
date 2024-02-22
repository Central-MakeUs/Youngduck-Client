import isUrlHttp from 'is-url-http';

// 공백 제거하는 함수
const removeWhitespace = (text: string) => {
  const regex = /\s/g;
  return text.replace(regex, '');
};

// 공백이 있는 지 체크하는 함수
export const containsWhiteSpace = (str: string) => {
  const pattern = /\s/;
  const matches = str.match(pattern);
  if (matches && matches.length > 0) {
    return true;
  }
  return false;
};

// 이메일 체크하는 함수
const checkValidateEmail = (email: string) => {
  if (!email) {
    return true;
  }
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
};

// URL을 체크하는 함수
const checkValidateURL = (text: string) => {
  return isUrlHttp(text);
};

export {removeWhitespace, checkValidateEmail, checkValidateURL};
