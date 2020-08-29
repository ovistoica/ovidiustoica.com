import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Text from '../text';
import {ImageWrapper} from './card.style';

const StepCard = ({title, description, _, container, textContainer}) => {
  return (
    <Box {...container}>
      <ImageWrapper />
      <Box {...textContainer}>
        <Text content={title} as="h4" color="mainText" textAlign="center" />
        <Text
          content={description}
          className="description"
          color="secondaryText"
          textAlign="center"
        />
      </Box>
    </Box>
  );
};

StepCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  container: PropTypes.object,
  textContainer: PropTypes.object,
};

StepCard.defaultProps = {
  container: {
    flexBox: true,
    flexDirection: 'column',
    height: ['470px', '470px', '470px', '470px', '470px'],
    width: ['80%', '80%', '500px', '400px', '366px'],
    border: `1px solid`,
    borderColor: 'borderColor',
    mx: '15px',
    mb: '30px',
  },
  textContainer: {
    flexDirection: 'column',
    flexBox: true,
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    px: '10px',
  },
};

export default StepCard;
