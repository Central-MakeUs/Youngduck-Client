import {ComponentMeta, ComponentStory} from '@storybook/react';
import TextTopBar from '.';

export default {
  title: 'components/TopBar/SubTitleTopBar',
  component: TextTopBar,
} as ComponentMeta<typeof TextTopBar>;

export const Basic: ComponentStory<typeof TextTopBar> = args => (
  <TextTopBar {...args} />
);

Basic.args = {
  text: '제목',
  subTitle: '소제목',
};
