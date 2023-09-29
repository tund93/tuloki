import type { Meta, StoryObj } from '@storybook/react';
import { SloganIcon } from './slogan-icon.presenter';

type Story = StoryObj<typeof SloganIcon>;

const meta = {
  component: SloganIcon,
  argTypes: {},
} satisfies Meta<typeof SloganIcon>;

export default meta;

export const Default: Story = {};
