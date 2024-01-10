import {ComponentMeta, ComponentStory} from '@storybook/react';
import SubTitleTopBar from '.';

export default {
  title: 'components/TopBar/SubTitleTopBar',
  component: SubTitleTopBar,
} as ComponentMeta<typeof SubTitleTopBar>;

export const Basic: ComponentStory<typeof SubTitleTopBar> = args => (
  <SubTitleTopBar {...args} />
);

Basic.args = {
  text: '제목',
  subTitle: '소제목',
};
