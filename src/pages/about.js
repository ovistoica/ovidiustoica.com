import React, {Fragment} from 'react';
import {ThemeProvider} from 'styled-components';
import {ContentWrapper, GlobalStyle, ResetCSS, portfolioTheme} from '../theme';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import DecorationBanner from '../components/decoration-banner';
import NumbersShowcase from '../components/numbers-showcase';
import AboutMe from '../components/about-me';
import CoreValues from '../components/core-values';
import QuoteCard from '../components/quote-card';

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
        <DecorationBanner
          title="In love with building products"
          description="For more than five years I've been working in the application  development space. It's not just what I do — it's who I am."
        />
        <NumbersShowcase />
        <AboutMe />
        <CoreValues />
        <QuoteCard />
        <Footer />
      </ContentWrapper>
    </Fragment>
  </ThemeProvider>
);

export default IndexPage;
