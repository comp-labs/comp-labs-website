import React from 'react';
import { BlogPostProvider } from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme/BlogPostItem';
import type { Props } from '@theme/BlogPostItems';

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  return (
    <>
      <div className='grid grid-flow-row-dense md:grid-cols-2 gap-4 items-stretch py-6 sm:grid-cols-1'>
        {items.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}>
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </BlogPostProvider>
        ))}
      </div>
    </>
  );
}
