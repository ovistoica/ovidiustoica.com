import './layout.css';
import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import {ThemeProvider} from 'styled-components';

import {ContentWrapper, GlobalStyle, ResetCSS, portfolioTheme} from '../theme';
import SEO from '../components/seo';
import Navbar from '../components/navbar';

const Layout = ({children}) => {
  return (
    <>
      <ThemeProvider theme={portfolioTheme}>
        <SEO
          title="Stoica Ovidiu"
          description="Mobile and Web Developer. Building highly performant and responsive Web and mobile applications"
        />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer paddingTop="40px" />
        </ContentWrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
