import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Text from '../text';

const ServiceCard = ({
  title,
  description,
  image,
  container,
  contentContainer,
  imageContainer,
}) => {
  return (
    <Box {...container}>
      <Box {...imageContainer}>
        {React.isValidElement(image) ? image : null}
      </Box>

      <Box {...contentContainer}>
        <Text content={title} as="h3" color="mainText" />
        <Text
          content={description}
          className="description"
          color="secondaryText"
        />
      </Box>
    </Box>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  container: PropTypes.object,
  contentContainer: PropTypes.object,
  imageContainer: PropTypes.object,
};

ServiceCard.defaultProps = {
  container: {
    flexBox: true,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: ['auto', 'auto', '500px', '550px', '578px'],
    width: ['90%', '80%', '80%', '46%', '40%'],
    border: `1px solid`,
    borderColor: 'borderColor',
    backgroundColor: 'background',
    p: '30px',
    pl: ['40px', '65px', '65px', '65px', '65px'],
    pr: ['40px', '65px', '65px', '65px', '65px'],
    mx: '15px',
    mb: '30px',
  },
  contentContainer: {
    flexDirection: 'column',
    flexBox: true,
    alignItems: 'flex-start',
    flex: 1,
    mt: '50px',
  },
  imageContainer: {
    flexDirection: 'column',
    flexBox: true,
    alignItems: 'flex-start',
    flex: 0.4,
  },
};

export default ServiceCard;
