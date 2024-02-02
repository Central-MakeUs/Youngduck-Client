import {ComponentMeta, ComponentStory} from '@storybook/react';
import CheckBox from '.';
import {ICheckBox} from '@/types/ui';

// 어떤 컴포넌트의 story 인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'components/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof CheckBox> = args => (
  <CheckBox {...args} />
);

// 각각이 새로운 스토리들
export const On: ComponentStory<typeof CheckBox> = Template.bind({});
On.args = {
  state: 'on' as ICheckBox,
};

export const Off: ComponentStory<typeof CheckBox> = Template.bind({});
Off.args = {
  state: 'off' as ICheckBox,
};

export const All: ComponentStory<typeof CheckBox> = Template.bind({});
All.args = {
  state: 'all' as ICheckBox,
};
