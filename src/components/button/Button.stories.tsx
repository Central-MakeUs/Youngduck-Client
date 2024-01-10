// stories/MyButton.stories.tsx
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from '.';

import {View} from 'react-native';
import SvgIcons from '@/assets/svgIcons';
import Typography from '../typography';
import {IVariant} from '@/types/ui';

// 어떤 컴포넌트의 story 인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

// 각각이 새로운 스토리들
export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
  children: 'Hello World',
};

export const Secondary: ComponentStory<typeof Button> = Template.bind({});
Secondary.args = {
  children: 'Hello World',
  variant: 'secondary' as IVariant,
};

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = {
  children: 'Hello World',
  variant: 'default' as IVariant,
};

export const Disabled: ComponentStory<typeof Button> = Template.bind({});
Disabled.args = {
  children: 'Hello World',
  disabled: true,
};

// svg 포함한 children 형식 테스트
export const Viewchild: ComponentStory<typeof Button> = Template.bind({});
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
