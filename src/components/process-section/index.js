import React from 'react';
import Container from '../container';
import Box from '../box';
import Text from '../text';
import {ProcessWrapper} from './process.style';
import StepCard from '../step-card';

const ProcessSection = ({row, contentArea, description, stepsArea}) => {
  return (
    <ProcessWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Text
              textAlign="center"
              as="h1"
              content="Performance. Clarity. Results."
              color="mainText"
            />
            <Text
              {...description}
              className="page-subtitle"
              color="secondaryText"
              content="My client relationships are built on trust, collaboration, and transparency. With your vision and my skills, the possibilities are endless."
            />
          </Box>
        </Box>
        <Box {...row}>
          <Box {...stepsArea} justifyContent="space-evenly">
            <StepCard
              title="Plan"
              description="First, I'll listen, answer your questions, and establish the project scope and budget."
            />
            <StepCard
              title="Design"
              description="Then, based on your input, I’ll provide initial designs, wireframes and interactions."
            />
            <StepCard
              title="Build"
              description="Finally, I'll execute the plan, and make sure you're aware of progress every step of the way."
            />
          </Box>
        </Box>
      </Container>
    </ProcessWrapper>
  );
};

ProcessSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentArea: {
    width: ['100%', '100%', '70%', '70%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '80px 0 60px 0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  stepsArea: {
    width: ['100%', '100%', '100%', '100%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '80px 0 60px 0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  description: {
    px: ['0px', '0px', '0px', '0px', '80px'],
  },
};

export default ProcessSection;
