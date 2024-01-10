import {ComponentMeta, ComponentStory} from '@storybook/react';
import BackMenuTopBar from '.';

export default {
  title: 'components/TopBar/BackMenuTopBar',
  component: BackMenuTopBar,
} as ComponentMeta<typeof BackMenuTopBar>;

export const Basic: ComponentStory<typeof BackMenuTopBar> = args => (
  <BackMenuTopBar {...args} />
);

Basic.args = {
  text: '제목',
};
