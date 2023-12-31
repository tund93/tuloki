import { PageTransitionAnimationProvider } from '@tuloki/core/component/page-transition-animation-provider';
import { ThemeProvider } from '@tuloki/core/component/theme-provider';
import { firaCode, getFontVariables, notoSans } from '@tuloki/core/font/family';
import { getBaseUrl } from '@tuloki/core/util/get-base-url';
import { colors } from '@tuloki/design-token';
import { cn } from '@tuloki/tailwind';
import type { Metadata } from 'next';
import { type ReactNode, Suspense } from 'react';
import { Footer } from '@/module/root/ui/layout/footer';
import { Header } from '@/module/root/ui/layout/header';
import '@/style/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): ReactNode => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body className={cn(getFontVariables([firaCode, notoSans]), 'bg-purple-1 font-sans', 'bg-grid-light-purple-5/50 dark:bg-grid-dark-purple-5/50')}>
      <ThemeProvider attribute="data-theme" enableSystem defaultTheme="system">
        <Header outsideClass="fixed left-0 top-0 z-10" />
        <PageTransitionAnimationProvider>
          <main className="min-h-screen">
            <Suspense>{children}</Suspense>
          </main>
        </PageTransitionAnimationProvider>
        <Footer outsideClass="mt-24" />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

export const generateMetadata = (): Metadata => {
  const title = 'Tuloki | Provide accessible Web for everyone, everywhere.';
  const description =
    'This portfolio presents my projects and thoughts as a frontend developer who maximizes website accessibility from two perspectives: engineer and designer.';

  return {
    metadataBase: getBaseUrl(),
    title: {
      default: title,
      template: '%s | Tuloki',
    },
    description,
    openGraph: {
      title,
      description,
      locale: 'en_US',
      url: getBaseUrl(),
    },
    robots: {
      follow: true,
      index: true,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@tuloki',
      creator: '@tuloki',
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: colors.light.purple['7'] },
      { media: '(prefers-color-scheme: dark)', color: colors.dark.purple['7'] },
    ],
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
};
