import React, {Fragment} from 'react';
import {ThemeProvider} from 'styled-components';
import {ContentWrapper, GlobalStyle, ResetCSS, portfolioTheme} from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Text from '../components/text';

const IndexPage = () => (
  <ThemeProvider theme={portfolioTheme}>
    <Fragment>
      <SEO
        title="Stoica Ovidiu"
        description="Mobile and Web Developer. Building highly performant and responsive Web and mobile applications"
      />
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <Layout>
          <Text
            content="Hello"
            color="mainText"
            mt="50px"
            fontWeight="Bold"
            as="h1"
          />
        </Layout>
      </ContentWrapper>
    </Fragment>
  </ThemeProvider>
);

export default IndexPage;
