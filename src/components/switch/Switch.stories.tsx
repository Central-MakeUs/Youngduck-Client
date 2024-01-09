import {ComponentMeta, ComponentStory} from '@storybook/react';
import Switch from '.';
import {useState} from 'react';

export default {
  title: 'components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

//const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;
const Template: ComponentStory<typeof Switch> = args => {
  const [isOn, setIsOn] = useState<boolean>(args.isOn);
  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  return <Switch {...args} isOn={isOn} onPress={handleToggle} />;
};
export const isOn: ComponentStory<typeof Switch> = Template.bind({});
isOn.args = {
  isOn: true,
};
