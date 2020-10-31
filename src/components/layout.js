import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import {ThemeProvider, css} from 'styled-components';

import {ContentWrapper, GlobalStyle, ResetCSS, portfolioTheme} from '../theme';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Container from './container';

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
          <div
            css={css`
              padding-top: 80px;
            `}
          >
            <Container noGutter mobileGutter width="1200px">
              {children}
            </Container>
          </div>
          <Footer />
        </ContentWrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
