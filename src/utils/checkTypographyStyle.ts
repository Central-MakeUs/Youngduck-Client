import text, {KeyofText} from '@/styles/texts';

function checkTypographyStyle(style: KeyofText) {
  switch (style) {
    case 'Title1':
      return text.Title1;
    case 'Title2':
      return text.Title2;
    case 'Label1':
      return text.Label1;
    case 'Label2':
      return text.Label2;
    case 'Label3':
      return text.Label3;
    case 'Label4':
      return text.Label4;
    case 'Body1':
      return text.Body1;
    case 'Body2':
      return text.Body2;
    case 'Chips1':
      return text.Chips1;
    case 'Chips2':
      return text.Chips2;
    case 'Caption':
      return text.Caption;
    default:
      console.log('something went wrong!');
      break;
  }
}

export default checkTypographyStyle;
