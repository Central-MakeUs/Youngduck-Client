import {ComponentMeta, ComponentStory} from '@storybook/react';
import SubTitleDescription from '.';

export default {
  title: 'components/TopBar/SubTitleTopBar',
  component: SubTitleDescription,
} as ComponentMeta<typeof SubTitleDescription>;

export const Basic: ComponentStory<typeof SubTitleDescription> = args => (
  <SubTitleDescription {...args} />
);

Basic.args = {
  text: '제목',
  subTitle: '소제목',
};
