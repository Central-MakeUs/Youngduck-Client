import {ComponentMeta, ComponentStory} from '@storybook/react';
import CancelTopBar from '.';

export default {
  title: 'components/TopBar/CancelTopBar',
  component: CancelTopBar,
} as ComponentMeta<typeof CancelTopBar>;

export const Basic: ComponentStory<typeof CancelTopBar> = args => (
  <CancelTopBar {...args} />
);

Basic.args = {
  text: '제목',
};
