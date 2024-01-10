import {ComponentMeta, ComponentStory} from '@storybook/react';
import MenuTopBar from '.';

export default {
  title: 'components/TopBar/MenuTopBar',
  component: MenuTopBar,
} as ComponentMeta<typeof MenuTopBar>;

export const Basic: ComponentStory<typeof MenuTopBar> = args => (
  <MenuTopBar {...args} />
);

Basic.args = {
  text: '제목',
};
