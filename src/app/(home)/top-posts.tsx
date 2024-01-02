import { Suspense } from 'react';

import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import { BlogPostItem } from '@/components/views/blog/item';
import { RSSFeedButton } from '@/components/views/blog/rss-feed-button';
import { getPopularPosts } from '@/utils/blog';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

import Loading from './../loading';

export const TopBlogPosts = async () => {
  const topPosts = await getPopularPosts();
  return (
    <Suspense fallback={<Loading />}>
      {topPosts.length ? (
        <Section id={'blog'} className={'gap-8'}>
          <div
            className={cx(
              'w-full flex flex-col items-start gap-4',
              'tablet-sm:flex-row tablet-sm:items-center tablet-sm:justify-between',
            )}
          >
            <h2 className={getColoredTextClasses('orange', 'yellow', 'orange')}>
              Top blog posts
            </h2>
            <div
              className={cx(
                'flex flex-row flex-1 items-center gap-4 self-end w-full',
                'tablet-sm:w-auto tablet-sm:justify-end',
              )}
            >
              <RSSFeedButton
                className={'max-mobile-lg:justify-center max-mobile-lg:flex-1'}
              />

              <LinkButton
                title={'View all'}
                href={'/blog'}
                className={cx(
                  'pr-3.5',
                  'justify-center max-mobile-lg:flex-1',
                  'mobile-lg:self-start mobile-lg:justify-start',
                )}
                data-umami-event={'View all blog posts'}
              >
                <Icon
                  className={'size-5'}
                  path={
                    'M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'
                  }
                />
                <span>View all</span>
              </LinkButton>
            </div>
          </div>

          <ol className={'flex flex-col gap-2'}>
            {topPosts.map((post) => (
              <li className={'block'} key={post.slug}>
                <BlogPostItem post={post} fullDate />
              </li>
            ))}
          </ol>
        </Section>
      ) : null}
    </Suspense>
  );
};
