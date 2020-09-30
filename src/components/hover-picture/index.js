import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Box from '../box';
import Text from '../text';
import Arrow from './arrow';
import {HoverWrapper} from './picture.style';

const HoverPicture = ({container, hoverButton, imageNode, description}) => {
  return (
    <HoverWrapper {...container}>
      <Img
        fluid={imageNode.childImageSharp.fluid}
        alt={imageNode.base.split('.')[0]}
      />
      <Box className="bottom-banner" {...hoverButton}>
        <Text as="h5" content={description} color="mainText" mb="0px" />
        <Arrow />
      </Box>
    </HoverWrapper>
  );
};

HoverPicture.propTypes = {
  imageNode: PropTypes.object.isRequired,
  description: PropTypes.string,
  container: PropTypes.object,
  hoverButton: PropTypes.object,
};

HoverPicture.defaultProps = {
  container: {
    width: ['300px', '400px', '570px', '570px', '570px'],
  },

  hoverButton: {
    backgroundColor: 'white',
    height: '50px',
    width: '100%',
    flexBox: true,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: '5px',
  },
  description: 'From idea to final product. Find out more',
};

export default HoverPicture;
