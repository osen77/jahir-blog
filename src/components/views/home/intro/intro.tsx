import Icon from '@mdi/react';
import { cx } from 'classix';
import type { ComponentProps } from 'react';

import { Heading } from '@/components/core/heading';
import { ButtonLink, Link } from '@/components/core/link';
import { mdiAccountCircleOutline } from '@/components/icons';
import { SocialLinks } from '@/components/molecules/social-links';

import {
  IntroSection,
  TextsContainer,
  IntroParagraph,
  PhotoContainer,
  Photo,
} from './intro.styles';
import { WavingHello } from './waving-hello';

export const Intro = (props: ComponentProps<typeof WavingHello>) => {
  return (
    <IntroSection id={'intro'}>
      <TextsContainer>
        <WavingHello {...props} />
        <Heading $as={'h2'} shadow={'blue'}>
          I am&nbsp;
          <Heading
            $as={'span'}
            shadow={'blue'}
            from={'brand'}
            to={'blue'}
            className={'[&>span]:w-[unset]'}
          >
            Jahir Fiquitiva
          </Heading>
        </Heading>
        <IntroParagraph>
          Passionate and creative full-stack software engineer based in{' '}
          <Link
            title={'Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
          >
            Colombia 🇨🇴
          </Link>
        </IntroParagraph>
        <div className={'flex items-center gap-16 flex-wrap'}>
          <ButtonLink title={'About page'} href={'/about'}>
            <Icon path={mdiAccountCircleOutline} size={1} />
            More about me
          </ButtonLink>
          <div
            className={cx(
              'flex items-center transition-colors',
              'border border-divider rounded-6',
              'py-4 pl-14 pr-10 min-h-[2.625rem]',
              'hover:border-accent-dark',
            )}
          >
            <SocialLinks />
          </div>
        </div>
      </TextsContainer>
      <PhotoContainer>
        <Photo
          src={'/static/images/jahir/jahir.jpg'}
          alt={"Jahir's Photo"}
          size={168}
          priority
        />
      </PhotoContainer>
    </IntroSection>
  );
};
