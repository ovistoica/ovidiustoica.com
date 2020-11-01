import React, {Fragment} from 'react';
import {ThemeProvider} from 'styled-components';
import {ContentWrapper, GlobalStyle, ResetCSS, portfolioTheme} from '../theme';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Banner from '../components/work-page-banner';
import WorkWithCategories from '../components/work-categories';

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
        <Navbar />
        <Banner
          title="My latest work + categories"
          description="Expertly crafted with meticulous care and attention to detail."
        />
        <WorkWithCategories />
        <Footer paddingTop="40px" />
      </ContentWrapper>
    </Fragment>
  </ThemeProvider>
);

export default IndexPage;
