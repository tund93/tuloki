import type { Meta, StoryObj } from '@storybook/react';
import { LogoIcon } from './logo-icon.presenter';

type Story = StoryObj<typeof LogoIcon>;

const meta = {
  component: LogoIcon,
  argTypes: {},
} satisfies Meta<typeof LogoIcon>;

export default meta;

export const Default: Story = {};
