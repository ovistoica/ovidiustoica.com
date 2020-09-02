import React from 'react';
import Box from '../box';
import Text from '../text';
import Container from '../container';
import {BannerWrapper} from './banner.style';

const DecorationBanner = ({row, contentArea, banner}) => {
  return (
    <BannerWrapper {...banner}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Text
              content="Always at your service"
              as="h1"
              color="buttonText"
              textAlign="center"
            />
            <Text
              className="description"
              color="buttonText"
              textAlign="center"
              content="From project exploration to design concepts to SEO and finishing touches, I can handle every aspect of turning your vision into reality. With everything under one roof, we set an extremely high bar for quality and efficiency."
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

DecorationBanner.defaultProps = {
  banner: {
    height: '376px',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentArea: {
    width: ['100%', '100%', '70%', '70%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default DecorationBanner;
