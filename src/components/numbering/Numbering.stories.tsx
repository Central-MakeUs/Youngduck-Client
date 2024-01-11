import {ComponentMeta, ComponentStory} from '@storybook/react';
import Numbering from '.';

export default {
  title: 'components/Numbering',
  component: Numbering,
} as ComponentMeta<typeof Numbering>;

const Template: ComponentStory<typeof Numbering> = args => (
  <Numbering {...args} />
);

export const One: ComponentStory<typeof Numbering> = Template.bind({});
One.args = {
  text: '1',
};

export const Two: ComponentStory<typeof Numbering> = Template.bind({});
Two.args = {
  text: '99',
};
