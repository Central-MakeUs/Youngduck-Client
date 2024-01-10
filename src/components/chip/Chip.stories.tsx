import {ComponentMeta, ComponentStory} from '@storybook/react';
import Chip from '.';
import {IChip} from '@/types/ui';

export default {
  title: 'components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />;

export const Primary: ComponentStory<typeof Chip> = Template.bind({});
Primary.args = {
  text: 'chip1',
};

export const Default: ComponentStory<typeof Chip> = Template.bind({});
Default.args = {
  text: 'chip2',
  state: 'default' as IChip,
};
