import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@tuloki/core/component/theme-provider';
import { fontFamily } from '@tuloki/core/font/family';
import { cn } from '@tuloki/tailwind';
import React from 'react';
import './storybook.css';

const themeDataAttribute = 'data-theme';
const defaultTheme = 'light';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute={themeDataAttribute} defaultTheme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
    // FIXME: I'm trying to add fontFamily to className and load the font by next/font, but oddly enough this does not work correctly.
    // Probably due to the fact that it work on monorepo.
    (Story) => (
      <div className={cn(fontFamily, 'font-sans')}>
        <Story />
      </div>
    ),
    withThemeByDataAttribute({
      attributeName: themeDataAttribute,
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: defaultTheme,
    }),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
