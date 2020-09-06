import React from 'react';
import Container from '../container';
import Box from '../box';
import Text from '../text';
import {CoreValuesWrapper} from './coreValues.style';

const AboutMe = ({textContainer}) => {
  return (
    <CoreValuesWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box {...textContainer}>
          <Text content="Core values" as="h2" color="mainText" />
          <Text
            className="page-subtitle"
            color="mainText"
            content="We are a mission-driven company committed to transparency, accountability, sustainability and positive impact. It’s not just good business – it’s the only way we want to do business."
          />
        </Box>
      </Container>
    </CoreValuesWrapper>
  );
};

AboutMe.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    px: ['200px'],
    flexBox: true,
    alignItems: 'center',
    flexDirection: 'column',
  },
};

export default AboutMe;
