import {ComponentMeta, ComponentStory} from '@storybook/react';
import TextInput from '.';
import {useState} from 'react';
import {ITextInput} from '@/types/textInput';

export default {
  title: 'components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => {
  const [input, setInput] = useState<string>('');
  return <TextInput {...args} setInput={setInput} input={input} />;
};

export const Default: ComponentStory<typeof TextInput> = Template.bind({});
Default.args = {
  type: 'default' as ITextInput,
};

export const Active: ComponentStory<typeof TextInput> = Template.bind({});
Active.args = {
  type: 'active' as ITextInput,
};

export const Error: ComponentStory<typeof TextInput> = Template.bind({});
Error.args = {
  type: 'error' as ITextInput,
};
