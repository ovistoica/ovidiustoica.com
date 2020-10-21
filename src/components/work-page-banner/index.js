import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Text from '../text';
import Container from '../container';
import {BannerWrapper} from './banner.style';
import {Title, AccentTitle} from '../home-banner/banner.style';

const DecorationBanner = ({row, contentArea, banner, description}) => {
  return (
    <BannerWrapper {...banner}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Title>
              My latest work <AccentTitle>+</AccentTitle> categories
            </Title>
            <Text
              className="description"
              color="secondaryText"
              textAlign="center"
              content={description}
              px={['0px', '0px', '0px', '0px', '30px']}
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

DecorationBanner.propTypes = {
  banner: PropTypes.object,
  row: PropTypes.object,
  contentArea: PropTypes.object,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

DecorationBanner.defaultProps = {
  banner: {},
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentArea: {
    width: ['100%', '100%', '70%', '70%'],
    p: ['0px 0 0px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default DecorationBanner;
