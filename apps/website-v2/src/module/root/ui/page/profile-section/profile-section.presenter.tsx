'use client';

import { useTheme } from '#core/component/theme-provider';
import BrandTulokiColorImage from '@tuloki/core/asset/brand/logo-color.png';
import BrandTulokiImage from '@tuloki/core/asset/brand/logo.png';
import ProfileActualPictureImage from '@tuloki/core/asset/profile/me-picture.jpg';
import { Image } from '@tuloki/core/component/image';
import { Link } from '@tuloki/core/component/link';
import { DiscordIcon } from '@tuloki/core/icon/discord-icon';
import { GithubIcon } from '@tuloki/core/icon/github-icon';
import { InstagramIcon } from '@tuloki/core/icon/instagram-icon';
import { MailIcon } from '@tuloki/core/icon/mail-icon';
import { TwitterIcon } from '@tuloki/core/icon/twitter-icon';
import { breakpoints } from '@tuloki/design-token';
import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react';

type ProfileSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'>;

export const ProfileSection = forwardRef<ElementRef<'section'>, Omit<ProfileSectionProps, 'ref'>>(({ ...props }, ref): ReactNode => {
  const { theme } = useTheme();
  return (
    <section ref={ref} className="flex flex-col items-center gap-12 p-12 tablet:gap-28 tablet:px-20 laptop:px-28" {...props}>
      <h1 className="text-4xl font-bold text-mauve-12 tablet:text-6xl laptop:text-7xl">
        Hi, I&apos;m <span className="text-purple-11">tuloki</span>!🧂
      </h1>
      <div className="flex flex-col items-end gap-6 tablet:gap-12">
        <div className="flex flex-col gap-6 tablet:flex-row tablet:gap-16">
          <div className="flex shrink-0 justify-center gap-4 laptop:justify-start">
            <Image
              src={theme === 'light' ? BrandTulokiColorImage : BrandTulokiImage}
              alt="A brand icon for tuloki."
              sizes={`${breakpoints.laptop.mediaQuery} 200px, 180px`}
              className="h-auto w-[180px] object-cover laptop:h-auto laptop:w-[200px]"
            />
            <Image
              src={ProfileActualPictureImage}
              alt="An actual picture for tuloki."
              sizes={`${breakpoints.laptop.mediaQuery} 200px, 180px`}
              className="hidden h-auto w-[180px] object-cover laptop:block laptop:h-[200px] laptop:w-[200px]"
            />
          </div>
          <p className="text-lg text-mauve-11">
            Born on December 11, 1993.
            <br />
            Lives in Pleiku City, Gia Lai Prefecture.
            <br />
            Engineer and designer who aims to provide the best web experience for any person in any environment.
          </p>
        </div>
        <ul className="flex items-center gap-3">
          <li>
            <Link aria-label="twitter link" aria-description="A link to Twitter account of tuloki." href="https://twitter.com/" external>
              <TwitterIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" />
            </Link>
          </li>
          <li>
            <Link aria-label="instagram link" aria-description="A link to Instagram account of tuloki." href="https://www.instagram.com/" external>
              <InstagramIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" />
            </Link>
          </li>
          <li>
            <Link aria-label="discord link" aria-description="A link to Discord account of tuloki." href="https://discordapp.com/" external>
              <DiscordIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" />
            </Link>
          </li>
          <li>
            <Link aria-label="github link" aria-description="A link to GitHub account of tuloki." href="https://github.com/tund93/" external>
              <GithubIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" />
            </Link>
          </li>
          <li>
            <Link aria-label="mail link" aria-description="An E-mail address for tuloki." href="mailto:nguyendanhtu789@gmail.com" external>
              <MailIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
});

ProfileSection.displayName = ProfileSection.name;
