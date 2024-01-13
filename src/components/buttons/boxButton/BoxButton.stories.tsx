// stories/MyButton.stories.tsx
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {View} from 'react-native';
import SvgIcons from '@/assets/svgIcons';

import {IVariant} from '@/types/ui';
import BoxButton from '.';
import Typography from '@/components/typography';

// 어떤 컴포넌트의 story 인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'components/buttons/BoxButton',
  component: BoxButton,
} as ComponentMeta<typeof BoxButton>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof BoxButton> = args => (
  <BoxButton {...args} />
);

// 각각이 새로운 스토리들
export const Primary: ComponentStory<typeof BoxButton> = Template.bind({});
Primary.args = {
  children: 'Hello World',
};

export const Secondary: ComponentStory<typeof BoxButton> = Template.bind({});
Secondary.args = {
  children: 'Hello World',
  variant: 'secondary' as IVariant,
};

export const Default: ComponentStory<typeof BoxButton> = Template.bind({});
Default.args = {
  children: 'Hello World',
  variant: 'default' as IVariant,
};

export const Disabled: ComponentStory<typeof BoxButton> = Template.bind({});
Disabled.args = {
  children: 'Hello World',
  disabled: true,
};

// svg 포함한 children 형식 테스트
export const Viewchild: ComponentStory<typeof BoxButton> = Template.bind({});
Viewchild.args = {
  children: (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <SvgIcons.MenuIcon />
      <Typography style="Label1" ml={3}>
        메뉴
      </Typography>
    </View>
  ),
  variant: 'secondary' as IVariant,
};
