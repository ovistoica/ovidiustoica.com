import React, {Fragment} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {ContentWrapper, GlobalStyle, ResetCSS, portfolioTheme} from '../theme';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import {themeGet} from '@styled-system/theme-get';
import Container from '../components/container';

const PrivacyWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;

  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }

  p,
  ins {
    font-family: 'Noto Serif JP', serif;
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
  a {
    padding: 0;
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
    font-family: 'Noto Serif JP', serif;
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
        <Container noGutter mobileGutter width="800px">
          <PrivacyWrapper>
            <h1>Privacy Policy</h1>
            <p>
              Your privacy is important to us. It is OvSDevelopment's policy to
              respect your privacy regarding any information we may collect from
              you across our website,{' '}
              <a href="https://ovsdevelopment.com">
                https://ovsdevelopment.com
              </a>
              , and any other site(s) we own and operate.
            </p>
            <p>
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </p>
            <p>
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorised access, disclosure, copying, use or
              modification.
            </p>
            <p>
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law.
            </p>
            <p>
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </p>
            <p>
              You are free to refuse our request for your personal information,
              with the understanding that we may be unable to provide you with
              some of your desired services.
            </p>
            <p>
              Your continued use of our website will be regarded as acceptance
              of our practices around privacy and personal information. If you
              have any questions about how we handle user data and personal
              information, feel free to contact us.
            </p>
            <p>This policy is effective as of 1 December 2020.</p>
          </PrivacyWrapper>
        </Container>
        <Footer showCTA={false} />
      </ContentWrapper>
    </Fragment>
  </ThemeProvider>
);

export default IndexPage;
