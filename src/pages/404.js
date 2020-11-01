import {themeGet} from '@styled-system/theme-get';
import React from 'react';
import {css} from 'styled-components';
import Container from '../components/container';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container noGutter mobileGutter width="800px">
      <h1
        css={css`
          text-align: center;
          color: ${themeGet('colors.mainText')};
        `}
      >
        NOT FOUND
      </h1>
      <p
        css={css`
          text-align: center;
          font-size: 22px;
        `}
      >
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
