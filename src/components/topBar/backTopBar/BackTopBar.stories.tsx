import {ComponentMeta, ComponentStory} from '@storybook/react';
import BackTopBar from '.';

export default {
  title: 'components/TopBar/BackTopBar',
  component: BackTopBar,
} as ComponentMeta<typeof BackTopBar>;

export const Basic: ComponentStory<typeof BackTopBar> = () => (
  <BackTopBar onPress={() => {}} />
);
