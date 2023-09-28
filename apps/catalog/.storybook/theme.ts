import { create } from '@storybook/theming';
import { getBaseUrl } from '@tuloki/core/util/get-base-url';

const brandLogo = `
<span>
tuloki
</span>
`;

export const theme = create({
  base: 'dark',
  brandTitle: 'Tuloki',
  brandUrl: getBaseUrl({ forceCustomDomain: true }).toString(),
  brandImage: `data:image/svg+xml;base64,${btoa(brandLogo)}`,
});
