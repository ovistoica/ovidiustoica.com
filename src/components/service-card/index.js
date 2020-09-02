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
}) => {
  return (
    <Box {...container}>
      {React.isValidElement(image) ? image : null}

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
};

ServiceCard.defaultProps = {
  container: {
    flexBox: true,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: ['470px', '470px', '470px', '470px', '578px'],
    width: ['80%', '80%', '500px', '400px', '577px'],
    border: `1px solid`,
    borderColor: 'borderColor',
    backgroundColor: 'background',
    p: '30px',
    pl: '65px',
    pr: '65px',
    mx: '15px',
    mb: '30px',
  },
  contentContainer: {
    mt: '95px',
    flexDirection: 'column',
    flexBox: true,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flex: 0.5,
  },
};

export default ServiceCard;
