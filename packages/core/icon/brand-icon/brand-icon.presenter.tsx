import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type BrandIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const BrandIcon = ({ ...props }: BrandIconProps): ReactNode => (
  <svg width="94.55" height="37.12" x="240.225" y="311.955" data-layer-type="text" viewBox="0.09 10.9 94.55 37.12" {...props}>
    <path
      fill="#FFF"
      d="M6.21 47.06q-.69 0-1.08-.67-.39-.67-.39-1.63 0-1.52.18-3.73l.09-1.19.1-2.44q0-1.61-.33-7.18-.32-5.56-.32-7.17 0-.14.03-.53.02-.39.02-1.22.04-.92.04-2.26 0-3.35-.46-4.27-.27 0-1.19.13l-1.29.1q-.6 0-1.06-.35-.46-.34-.46-.9 0-.55 1.11-.96 1.61-.55 5.47-.78 1.56-.1 1.89-.1.55 0 1.01.37.46.37.46.92t-.39.9q-.39.34-.99.34l-.83-.04q-.37-.05-.83-.05h-.46q.32 3.13.32 5.66l-.04 2.94q-.05 1.34-.05 2.99 0 2.21.19 5.29.23 3.82.23 5.29 0 1.75.18 4.14.18 2.44.18 4.14 0 2.26-1.33 2.26zm18.61.5q-2.86 0-4.51-2.48-1.8-2.53-2.53-6.21-.83-3.91-1.06-8.37-.23-4.05-.23-8.79v-3.82q.05-1.61.05-3.4-.37-.37-.37-.92t.41-.99q.42-.44.92-.44 1.66 0 1.66 3.27 0 2.12.23 8 .23 5.89.23 8.01.23.6.43 2.39.21 1.79.21 2.94 0 1.02.32 2.51.33 1.5.92 3.01.6 1.61 1.57 2.65.96 1.03 2.02 1.03.65 0 1.08-.41.44-.41.58-1.2.27-1.28.27-2.53v-8.97q0-1.7-.32-4.32-.27-2.9-.27-4.37v-.32q0-.74-.05-1.34l-.05-1.33q0-1.29-.13-3.91-.19-2.35-.19-3.96 0-.5.53-.87t1.17-.37l1.15 1.06v.78q0 .55-.18 1.34-.18 1.28-.18 1.47 0 4.18.46 11.54.41 7.73.41 12.01 0 2.3-.46 4.05-.28 1.06-.76 1.7-.48.64-1.31 1.1-.78.46-2.02.46zm14.55-.32q-.59 0-1.08-.44-.48-.43-.48-1.03 0-.41.18-1.01.14-.65.14-.97 0-4.09-.46-15.73-.46-9.94-.46-15.69 0-.41.32-.66.33-.26.79-.26.55 0 .96.39.42.4.42.95 0 2.76.27 8.28.23 6.12.23 8.28l.05.55V31q.14 4.01.14 11.96v1.2h3.54q.96.69.96 1.38 0 .51-.34.9-.35.39-.81.39-.13 0-.5-.09l-.19-.05q-.27.05-.87.05h-.78q-.32-.05-.74-.05-.46.55-1.29.55zm17.41.78q-1.24 0-2.25-.82-1.01-.83-1.75-2.26-1.33-2.48-1.98-6.81-.46-2.99-.69-6.9l-.04-2.43v-2.49q-.05-1.19-.05-2.9 0-2.76.23-4.87.19-2.21.92-4.37.74-1.89 2.12-2.67.83-.37 1.65-.37 2.44 0 3.87 1.93 1.56 2.17 2.07 4.83.73 3.22.83 6.17.18 3.26.18 6.16v2.62q0 .79-.23 2.95-.18 1.7-.18 2.9v.18q-.28 1.29-.28 3.04 0 1.28-.55 2.66-.55 1.38-1.57 2.35-1.01 1.1-2.3 1.1zm.1-2.53q.92 0 1.56-1.7.55-1.52.8-3.7.26-2.19.44-4.95.09-1.19.09-3.08l-.04-4.23q-.09-2.48-.55-6.21-.37-3.17-1.38-5.61-.46-1.15-1.15-1.8-.69-.64-1.48-.64-1.15 0-1.7 1.79-.69 1.89-.92 4.14-.27 2.44-.32 4.65l-.05 1.52q-.04.64-.04 1.75v.18q0 3.08.64 7.59.74 6.12 2.16 8.69.92 1.61 1.94 1.61zm23.02 2.3q-.28 0-.55-.09-.23-.04-.51-.04-1.24-7.04-2.48-11.78-1.25-4.74-3.13-8.92l-.97 1.79q-.41.78-.46 1.38-.14 1.38-.14 2.02 0 1.38.14 4.24.14 2.8.14 4.27v3.78q0 2.43-1.56 2.43-1.34 0-1.34-2.57 0-2.03.28-6.21.32-3.87.32-6.17l.05-3.95v-4.79q0-2.53-.33-5.29-.32-2.85-.32-4.32 0-.6.37-1.01.37-.42.92-.42 1.7 0 1.7 3.73l-.18 9.43.87-2.25q1.52-3.87 3.13-7.64.92-2.07 1.66-3.27.78-1.24 1.24-1.24.5 0 .9.35.39.34.39.85 0 .46-2.49 5.7-2.44 5.02-2.85 6.67v.83q.69 1.75 3.68 11.2t2.99 10.01q0 .55-.44.92-.43.36-1.03.36zm10.46-1.1q-3.95 0-3.95-1.38 0-1.1 1.38-1.1h.55q.18.04.41.04.37 0 .53-.23.16-.23.16-.83 0-3.91-.46-10.67-.41-7.04-.41-10.62 0-1.29.04-2.35l.05-2.35q0-1.51-.14-2.53-.5.19-1.06.19-1.05 0-1.05-1.11 0-.55.66-.96.67-.42 1.73-.6 1.93-.32 3.26-.32.56 0 .95.37.39.36.39.87t-.3.87q-.3.37-.76.37-.28 0-.46-.04h-.37q-.46 0-.66.2-.21.21-.21.76 0 4.88.6 13.43.55 8.97.55 13.48v1.75q.32-.05.92-.05 1.93 0 1.93 1.61v.28l-1.15.78q-.05 0-.28.02-.23.03-.92.03-1.56.09-1.93.09z"
      data-horizontal-grow="center"
      dominantBaseline="hanging"
      fontFamily="Amatic SC"
      fontSize="46"
      fontWeight="700"
      letterSpacing="2"
    ></path>
  </svg>
);