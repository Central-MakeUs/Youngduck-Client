import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import Carousel from '.';

const CarouselTest = () => {
  //const pages = [
  //  {color: 'red', content: 'Page 1'},
  //  {color: 'green', content: 'Page 2'},
  //  {color: 'blue', content: 'Page 3'},
  //  {color: 'pink', content: 'Page 3'},
  //];
  return (
    <View style={{height: 200, justifyContent: 'center', alignItems: 'center'}}>
      {/*<Carousel pages={pages} pageWidth={300} gap={0} />*/}
    </View>
  );
};

storiesOf('components/Carousel', module).add('basic', () => <CarouselTest />);
