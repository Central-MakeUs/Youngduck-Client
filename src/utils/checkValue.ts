import isUrlHttp from 'is-url-http';

// 공백 제거하는 함수
const removeWhitespace = (text: string) => {
  const regex = /\s/g;
  return text.replace(regex, '');
};

// 이메일 체크하는 함수
const checkEmail = (email: string) => {
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
};

// URL을 체크하는 함수
const checkURL = (text: string) => {
  return isUrlHttp(text);
};

export {removeWhitespace, checkEmail, checkURL};
