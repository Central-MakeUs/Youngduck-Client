// stories/MyButton.stories.tsx
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from '.';
import {Variant} from '@/types/button';

// 어떤 컴포넌트의 story 인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

// 각각이 새로운 스토리들
export const Fill: ComponentStory<typeof Button> = Template.bind({});
Fill.args = {
  text: 'Hello World',
};

export const Line: ComponentStory<typeof Button> = Template.bind({});
Line.args = {
  text: 'Hello World',
  variant: 'line' as Variant,
};

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = {
  text: 'Hello World',
  variant: 'default' as Variant,
};

export const Disabled: ComponentStory<typeof Button> = Template.bind({});
Disabled.args = {
  text: 'Hello World',
  disabled: true,
};
