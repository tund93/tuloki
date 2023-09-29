import type { Meta, StoryObj } from '@storybook/react';
import LogoColorIconImage from '#core/asset/brand/logo-color.png';
import { Image } from './image.presenter';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
  component: Image,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    src: LogoColorIconImage,
    alt: 'The logo icon of this website.',
    width: 640,
    height: 640,
  },
};
