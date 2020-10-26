import React from 'react';
import {Link} from 'gatsby';
import Box from '../box';
import Text from '../text';
import Container from '../container';
import {BannerWrapper, Title, AccentTitle} from './banner.style';
import Button from '../button';

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
            <Text
              mb="30px"
              color="secondaryText"
              className="description"
              content="Hi! I’m Ovidiu Stoica. For over 4 years, I've built beautiful, performant and  scalable applications for many business owners."
            />
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
