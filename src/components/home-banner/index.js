import React from 'react';
import {Link} from 'gatsby';
import Box from '../box';
import Container from '../container';
import {BannerWrapper, Title, AccentTitle} from './banner.style';
import Button from '../button';
import {css} from 'styled-components';
import {themeGet} from '@styled-system/theme-get';

const HomeBanner = ({row, contentArea}) => {
  return (
    <BannerWrapper py={['40px', '30px', '80px', '80px', '80px']}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Title>
              I create better mobile and web apps for{' '}
              <AccentTitle>you</AccentTitle>
            </Title>
            <div>
              <p
                css={css`
                  /* description */
                  font-family: 'Noto Serif JP', serif;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 24px;
                  line-height: 30px;
                  color: ${themeGet('colors.secondaryText')};
                  @media (max-width: 768px) {
                    font-size: 18px;
                    line-height: 26px;
                  }
                `}
              >
                Hi! I&apos;m,{' '}
                <span
                  css={css`
                    text-decoration: underline;
                    text-decoration-color: ${themeGet('colors.accent')};
                    text-decoration-style: dashed;
                  `}
                >
                  Ovidiu Stoica
                </span>
                . For over 4 years, I&apos;ve built beautiful, performant and
                scalable applications for many business owners.
              </p>
            </div>

            <Link href="/work">
              <Button title="See my work" />
            </Link>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

HomeBanner.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentArea: {
    width: ['100%', '100%', '70%', '60%'],
    p: ['65px 0 30px 0', '65px 0 80px 0', '80px 0 60px 0', '80px 0 30px 0'],
    flexBox: true,
    flexWrap: 'wrap',
  },
};

export default HomeBanner;
