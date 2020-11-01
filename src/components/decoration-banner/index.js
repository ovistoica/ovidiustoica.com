import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Text from '../text';
import Container from '../container';
import {BannerWrapper} from './banner.style';
import {css} from 'styled-components';
import {themeGet} from '@styled-system/theme-get';

const DecorationBanner = ({
  row,
  contentArea,
  banner,
  title,
  description,
  hashtags,
}) => {
  const renderHashtags = () => {
    return (
      <Box {...row}>
        {hashtags.map(hashtag => {
          return (
            <div
              key={hashtag}
              css={css`
                background-color: ${themeGet('colors.accent')};
                display: flex;
                margin: 5px;
                align-items: center;
                justify-content: center;
                padding-left: 5px;
                padding-right: 5px;
                border-radius: 8px;
              `}
            >
              <p
                css={css`
                  text-transform: uppercase;
                  font-weight: 600;
                  margin: 0px;
                  font-size: 14px;
                  font-family: 'itc-avant-garde-gothic-pro', sans-serif;
                  color: rgba(0, 0, 0, 0.7);
                `}
              >
                #{hashtag}
              </p>
            </div>
          );
        })}
      </Box>
    );
  };
  return (
    <BannerWrapper {...banner}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Text
              content={title}
              as="h1"
              color="buttonText"
              textAlign="center"
            />
            <Text
              className="description"
              color="buttonText"
              textAlign="center"
              content={description}
              px={['0px', '0px', '0px', '0px', '30px']}
            />
            {hashtags ? renderHashtags() : null}
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
  banner: {
    height: '400px',
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
    flexDirection: 'column',
    justifyContent: 'center',
    mt: '30px',
  },
};

export default DecorationBanner;
