import {ComponentMeta, ComponentStory} from '@storybook/react';
import BackTitleTopBar from '.';

export default {
  title: 'components/TopBar/BackTitleTopBar',
  component: BackTitleTopBar,
} as ComponentMeta<typeof BackTitleTopBar>;

export const Basic: ComponentStory<typeof BackTitleTopBar> = args => (
  <BackTitleTopBar {...args} />
);

Basic.args = {
  text: '제목',
};
