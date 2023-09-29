import { create } from '@storybook/theming';
import { getBaseUrl } from '@tuloki/core/util/get-base-url';

export const theme = create({
  base: 'dark',
  brandTitle: 'Tuloki',
  brandUrl: getBaseUrl({ forceCustomDomain: true }).toString(),
});
