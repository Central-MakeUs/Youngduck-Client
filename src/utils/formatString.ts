const formatString = (type: 'title' | 'poster', target: string) => {
  if (type === 'title')
    return target.replace(' ', '').replace(/ !HS /g, '').replace(/ !HE /g, '');

  return target.split('|')[0];
};

export default formatString;
