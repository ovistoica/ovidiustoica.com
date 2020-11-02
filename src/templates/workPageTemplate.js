/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';
import DecorationBanner from '../components/decoration-banner';
import Container from '../components/container';
import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: {path: {eq: $pathSlug}}) {
      frontmatter {
        title
        path
        hashtags
        description
      }
      body
    }
  }
`;

const PostContainer = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }

  p,
  ins {
    font-family: 'monion-pro', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    /* or 150% */

    /* Secondary Text */
    color: ${themeGet('colors.secondaryText')};
  }

  ins {
    text-decoration-color: ${themeGet('colors.secondaryText')};
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

  ul {
    list-style-position: inside;
  }
  ul ::marker {
    color: ${themeGet('colors.mainBrand')};
  }

  li {
    /* description */
    font-family: 'monion-pro', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: ${themeGet('colors.secondaryText')};

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 26px;
    }
  }
  ul {
    margin-top: 10px;
  }
`;

const Post = ({data: {mdx: post}}) => {
  const {title, hashtags, description} = post.frontmatter;
  const {body} = post;
  return (
    <div>
      <Layout>
        <DecorationBanner
          title={title}
          description={description}
          hashtags={hashtags}
          banner={{height: '400px'}}
          contentArea={{
            width: ['100%', '100%', '70%', '70%'],
            p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
            flexBox: true,
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: '50px',
          }}
        />
        <Container noGutter mobileGutter width="800px">
          <PostContainer>
            <MDXRenderer>{body}</MDXRenderer>
          </PostContainer>
        </Container>
      </Layout>
    </div>
  );
};

export default Post;
