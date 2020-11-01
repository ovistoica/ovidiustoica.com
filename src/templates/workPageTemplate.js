import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';
import DecorationBanner from '../components/decoration-banner';
import Container from '../components/container';

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: {path: {eq: $pathSlug}}) {
      frontmatter {
        title
        path
        hashtags
      }
      body
    }
  }
`;

const Post = ({data: {mdx: post}}) => {
  const {title, hashtags} = post.frontmatter;
  const {body} = post;
  return (
    <div>
      <Layout>
        <DecorationBanner title={title} hashtags={hashtags} />

        <Container noGutter mobileGutter width="800px">
          <MDXRenderer>{body}</MDXRenderer>
        </Container>
      </Layout>
    </div>
  );
};

export default Post;
