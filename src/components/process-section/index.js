import React from 'react';
import Container from '../container';
import Box from '../box';
import Text from '../text';
import Button from '../button';
import {ProcessWrapper} from './process.style';
import StepCard from '../step-card';
import {Link} from 'gatsby';
import PlanIcon from '../../assets/svg/plan-icon';
import MacIcon from '../../assets/svg/mac-icon';
import DesignIcon from '../../assets/svg/design-icon';

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
          <Box {...stepsArea}>
            <StepCard
              image={<PlanIcon />}
              title="Plan"
              description="First, I'll listen, answer your questions, and establish the project scope and budget."
            />
            <StepCard
              image={<DesignIcon />}
              title="Design"
              description="Then, based on your input, I’ll provide initial designs, wireframes and interactions."
            />
            <StepCard
              image={<MacIcon />}
              title="Build"
              description="Finally, I'll execute the plan, and make sure you're aware of progress every step of the way."
            />
          </Box>
        </Box>
        <Box {...row}>
          <Link href="/services">
            <Button title="See the process" />
          </Link>
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
    p: ['0px 0 10px 0', '0px 0 0px 0', '0px 0 0px 0', '0px 0 80px 0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  stepsArea: {
    width: ['100%', '100%', '100%', '100%'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  description: {
    px: ['0px', '0px', '0px', '0px', '80px'],
  },
};

export default ProcessSection;
